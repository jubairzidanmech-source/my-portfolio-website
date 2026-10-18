import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const JUBAIR_TZ = 'Asia/Dhaka';

/**
 * Format a representative city name from an IANA timezone string.
 * Examples:
 *   "America/New_York" -> "New York"
 *   "Europe/London" -> "London"
 *   "Asia/Dhaka" -> "Dhaka"
 *   "Australia/Sydney" -> "Sydney"
 */
const formatCityName = (tz) => {
  if (!tz) return 'Local Time';
  if (tz === 'UTC' || tz === 'GMT' || tz === 'Etc/UTC' || tz === 'Etc/GMT') return 'UTC';
  const parts = tz.split('/');
  const rawCity = parts[parts.length - 1];
  return rawCity.replace(/_/g, ' ');
};

/**
 * Extract live time, 12h formatted parts, day/night status, full day name/date, and UTC offset.
 */
const getTimeData = (timeZone, date) => {
  try {
    // 12-hour time parts
    const timeParts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).formatToParts(date);

    const hours = timeParts.find(p => p.type === 'hour')?.value || '12';
    const minutes = timeParts.find(p => p.type === 'minute')?.value || '00';
    const ampm = timeParts.find(p => p.type === 'dayPeriod')?.value?.toUpperCase() || 'AM';

    // 24-hour hour for Day/Night calculation (6:00 to 17:59 is Day, 18:00 to 5:59 is Night)
    const hour24Parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: 'numeric',
      hour12: false
    }).formatToParts(date);
    const hour24 = parseInt(hour24Parts.find(p => p.type === 'hour')?.value || '12', 10);
    const isDay = hour24 >= 6 && hour24 < 18;

    // Full day name and date: e.g. "Sunday, Oct 18"
    const dateStr = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    }).format(date);

    // UTC offset calculation
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
    const diffMinutes = Math.round((tzDate.getTime() - utcDate.getTime()) / 60000);
    const sign = diffMinutes >= 0 ? '+' : '-';
    const absMinutes = Math.abs(diffMinutes);
    const h = Math.floor(absMinutes / 60);
    const m = absMinutes % 60;
    const utcOffset = m === 0 ? `UTC${sign}${h}` : `UTC${sign}${h}:${m.toString().padStart(2, '0')}`;

    return { hours, minutes, ampm, isDay, dateStr, utcOffset, diffMinutes };
  } catch (e) {
    return {
      hours: '12',
      minutes: '00',
      ampm: 'PM',
      isDay: true,
      dateStr: 'Today',
      utcOffset: 'UTC',
      diffMinutes: 0
    };
  }
};

/**
 * Relative time difference text between visitor's time and Dhaka
 */
const getTimeDiffText = (jubairDiffMin, visitorDiffMin) => {
  const diffMinutes = visitorDiffMin - jubairDiffMin;
  if (Math.abs(diffMinutes) < 15) return 'Same time zone';

  const absMinutes = Math.abs(diffMinutes);
  const hours = Math.floor(absMinutes / 60);
  const minutes = absMinutes % 60;

  let timeStr = `${hours}h`;
  if (minutes > 0) timeStr += ` ${minutes}m`;

  if (diffMinutes > 0) {
    return `${timeStr} ahead of Dhaka`;
  } else {
    return `${timeStr} behind Dhaka`;
  }
};

export const LiveDualClock = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [visitorTz, setVisitorTz] = useState('UTC');

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
      setVisitorTz(tz);
    } catch (e) {
      setVisitorTz('UTC');
    }

    // Tick every second to ensure exact second-aligned minute transitions
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const jubair = getTimeData(JUBAIR_TZ, currentTime);
  const visitor = getTimeData(visitorTz, currentTime);
  const visitorCity = formatCityName(visitorTz);
  const diffBadgeText = getTimeDiffText(jubair.diffMinutes, visitor.diffMinutes);

  return (
    <div className="dual-clock-widget" aria-label="Live dual timezone clock widget">
      {/* Left Card: Jubair's Time (Primary - Dark Navy with subtle blue accents) */}
      <div className="dual-clock-card is-primary">
        <div className="dual-clock-top">
          <div className="dual-clock-meta">
            <span className="dual-clock-badge">Jubair's Time</span>
            <span className="dual-clock-city">Dhaka, Bangladesh</span>
          </div>
          <span className="dual-clock-utc">{jubair.utcOffset}</span>
        </div>

        <div className="dual-clock-main">
          <div className="dual-clock-time">
            <span className="dual-clock-digits">{jubair.hours}:{jubair.minutes}</span>
            <span className="dual-clock-ampm">{jubair.ampm}</span>
          </div>
          <div className={`dual-clock-period ${jubair.isDay ? 'is-day' : 'is-night'}`}>
            {jubair.isDay ? (
              <>
                <Sun size={12} className="period-icon sun" />
                <span>Day</span>
              </>
            ) : (
              <>
                <Moon size={12} className="period-icon moon" />
                <span>Night</span>
              </>
            )}
          </div>
        </div>

        <div className="dual-clock-bottom">
          <span className="dual-clock-date">{jubair.dateStr}</span>
        </div>
      </div>

      {/* Right Card: My Time (Secondary - Visitor's Browser Timezone) */}
      <div className="dual-clock-card is-secondary">
        <div className="dual-clock-top">
          <div className="dual-clock-meta">
            <span className="dual-clock-badge">My Time</span>
            <span className="dual-clock-city" title={visitorTz}>{visitorCity}</span>
          </div>
          <span className="dual-clock-utc">{visitor.utcOffset}</span>
        </div>

        <div className="dual-clock-main">
          <div className="dual-clock-time">
            <span className="dual-clock-digits">{visitor.hours}:{visitor.minutes}</span>
            <span className="dual-clock-ampm">{visitor.ampm}</span>
          </div>
          <div className={`dual-clock-period ${visitor.isDay ? 'is-day' : 'is-night'}`}>
            {visitor.isDay ? (
              <>
                <Sun size={12} className="period-icon sun" />
                <span>Day</span>
              </>
            ) : (
              <>
                <Moon size={12} className="period-icon moon" />
                <span>Night</span>
              </>
            )}
          </div>
        </div>

        <div className="dual-clock-bottom">
          <span className="dual-clock-date">{visitor.dateStr}</span>
          {diffBadgeText && (
            <span className="dual-clock-diff-pill">{diffBadgeText}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveDualClock;
