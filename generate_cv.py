import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def generate_cv():
    output_path = os.path.join(os.path.dirname(__file__), "public", "Md_Jubair_Uddin_Zidan_CV.pdf")
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom palette
    navy = colors.HexColor("#0A2566")
    royal = colors.HexColor("#1D4ED8")
    dark_gray = colors.HexColor("#1E293B")
    medium_gray = colors.HexColor("#475569")
    light_blue = colors.HexColor("#EFF6FF")
    border_blue = colors.HexColor("#BFDBFE")

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=navy
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=royal
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=medium_gray
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=navy,
        spaceAfter=4,
        textTransform='uppercase'
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=dark_gray
    )

    item_meta_style = ParagraphStyle(
        'ItemMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=medium_gray
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_gray
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=dark_gray,
        leftIndent=10
    )

    story = []

    # Header
    story.append(Paragraph("Md. Jubair Uddin Zidan", title_style))
    story.append(Paragraph("Mechanical Engineering Researcher • Computational Fluid Dynamics & Architected Metamaterials", subtitle_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Adabor, Shyamoli, Dhaka, Bangladesh  |  Email: jubairzidan99@gmail.com  |  Institution: CUET", contact_style))
    story.append(Paragraph("LinkedIn: linkedin.com/in/jubairzidan  |  Scholar: Md. Jubair Uddin Zidan  |  GitHub: github.com/jubairzidan", contact_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1.5, color=royal, spaceAfter=8, spaceBefore=0))

    # Education
    story.append(Paragraph("EDUCATION", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_blue, spaceAfter=6, spaceBefore=0))
    
    edu_data = [
        [
            Paragraph("<b>Master of Science (M.Sc.) in Mechanical Engineering</b><br/>Chittagong University of Engineering and Technology (CUET)", item_title_style),
            Paragraph("<b>2025 – 2026</b><br/><i>Ongoing Postgraduate</i>", item_meta_style)
        ],
        [
            Paragraph("• Theory Coursework Cumulative CGPA: <b>3.90 / 4.00</b><br/>• Focus: Advanced Computational Fluid Dynamics, Turbulence Modeling, and Metamaterials", bullet_style),
            ""
        ],
        [
            Paragraph("<b>Bachelor of Science (B.Sc.) in Mechanical Engineering</b><br/>Chittagong University of Engineering and Technology (CUET)", item_title_style),
            Paragraph("<b>2019 – 2024</b><br/><i>Degree Conferred</i>", item_meta_style)
        ],
        [
            Paragraph("• Cumulative GPA across Upper Semesters: <b>3.41 / 4.00</b> (Graduating Class: 2024)<br/>• Senior Capstone Thesis: High-Fidelity 3D Ground Effect Aerodynamics of Modern F1 Venturi Tunnels", bullet_style),
            ""
        ]
    ]
    t_edu = Table(edu_data, colWidths=[400, 140])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 8))

    # Research & Publications
    story.append(Paragraph("RESEARCH EXPERIENCE & PUBLICATIONS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_blue, spaceAfter=6, spaceBefore=0))

    story.append(Paragraph("<b>Undergraduate Bachelor Thesis: Aerodynamics & Ground Effect CFD</b>", item_title_style))
    story.append(Paragraph("<i>Chittagong University of Engineering and Technology (CUET), Dept. of Mechanical Engineering | 2024</i>", item_meta_style))
    story.append(Paragraph("• Conducted full-domain 3D computational fluid dynamics (CFD) simulations investigating Venturi ground-effect floors under modern FIA Formula One technical regulations.", bullet_style))
    story.append(Paragraph("• Analyzed vortex breakdown phenomena, suction peak preservation, downforce generation, and sensitivity to ride-height variations.", bullet_style))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>Current Manuscript: Architected Auxetic Mechanical Metamaterials for Energy Absorption</b>", item_title_style))
    story.append(Paragraph("<i>Under Review | Authors: Jubair Zidan, Wakil Ahmed, Dibosh Das | Supervisor: Dr. Kazi Zahir Uddin (UIUC / CUET)</i>", item_meta_style))
    story.append(Paragraph("• Systematic state-of-the-art review and numerical characterization of negative Poisson's ratio cellular metamaterials (2D re-entrant, chiral, and 3D rotational lattices).", bullet_style))
    story.append(Paragraph("• Evaluated specific energy absorption (SEA), dynamic impact crashworthiness, and multi-objective topology optimization.", bullet_style))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>Conference Paper: Aerodynamic Characterization of Bionic Tubercles on Airfoils</b>", item_title_style))
    story.append(Paragraph("<i>International Conference on Mechanical Engineering and Renewable Energy (ICMERE)</i>", item_meta_style))
    story.append(Paragraph("• Investigated stall delay mechanisms and boundary layer vortex generation across modified NACA airfoils under varying Reynolds numbers.", bullet_style))
    story.append(Spacer(1, 8))

    # Technical Skills
    story.append(Paragraph("TECHNICAL & COMPUTATIONAL SKILLS", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_blue, spaceAfter=6, spaceBefore=0))

    skills_data = [
        [Paragraph("<b>CFD & FEA Toolkits:</b>", item_title_style), Paragraph("ANSYS Fluent, ANSYS Workbench, OpenFOAM, COMSOL Multiphysics, Abaqus", body_style)],
        [Paragraph("<b>CAD & Design:</b>", item_title_style), Paragraph("SolidWorks, Autodesk Fusion 360, AutoCAD, SpaceClaim", body_style)],
        [Paragraph("<b>Programming & Math:</b>", item_title_style), Paragraph("MATLAB, Python (NumPy, SciPy, Matplotlib), C++, LaTeX", body_style)],
        [Paragraph("<b>Specialized Domains:</b>", item_title_style), Paragraph("Aerodynamics, Aeroacoustics, Turbulence Modeling, Metamaterials, Topology Optimization", body_style)],
    ]
    t_skills = Table(skills_data, colWidths=[140, 400])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 8))

    # Professional Experience & Leadership
    story.append(Paragraph("PROFESSIONAL & LEADERSHIP EXPERIENCE", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_blue, spaceAfter=6, spaceBefore=0))

    story.append(Paragraph("<b>ASME Student Section CUET — Executive Committee Member</b> (2022 – 2024)", item_title_style))
    story.append(Paragraph("• Organized technical symposia, CAD modeling challenges, and national student engineering conventions.", bullet_style))
    story.append(Paragraph("<b>Industrial Engineering Internship — Thermal Power Generation Plant</b> (2023)", item_title_style))
    story.append(Paragraph("• Hands-on attachment analyzing combined cycle gas turbine operations, heat recovery steam generators (HRSG), and maintenance protocols.", bullet_style))
    story.append(Paragraph("<b>Academic Instructorship & STEM Mentor — Physics & Higher Mathematics</b> (2021 – Present)", item_title_style))
    story.append(Paragraph("• Taught Newtonian mechanics, electromagnetism, and advanced calculus to aspiring undergraduate engineering candidates.", bullet_style))
    story.append(Spacer(1, 8))

    # Honors & Accreditations
    story.append(Paragraph("HONORS, AWARDS & RECOGNITION", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_blue, spaceAfter=6, spaceBefore=0))
    story.append(Paragraph("• <b>Champion — National Mechanical Engineering Innovation Design Challenge</b>", bullet_style))
    story.append(Paragraph("• <b>Scholarly Poster Symposium Award</b> for CFD Ground-Effect Investigations", bullet_style))
    story.append(Paragraph("• <b>Global Student Leadership Summit Delegate</b> representing CUET Faculty of Mechanical Engineering", bullet_style))

    doc.build(story)
    print(f"Successfully generated CV at {output_path}")

if __name__ == '__main__':
    generate_cv()
