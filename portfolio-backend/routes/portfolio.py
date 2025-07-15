from fastapi import APIRouter
from typing import List, Dict

router = APIRouter()

@router.get("/about")
async def get_about_info():
    return {
        "name": "Carlos Martín Salvatierra",
        "title": "Desarrollador Fullstack",
        "description": "Desarrollador web fullstack apasionado por crear cosas nuevas y resolver problemas. Me motiva salir de la zona de confort, aprender constantemente y aportar soluciones innovadoras que generen impacto real en los proyectos en los que participo.",
        "skills": ["React", "Next.js", "Python", "FastAPI", "TypeScript", "Node.js", "Tailwind CSS"],
        "favoriteGame": "Cyberpunk 2077",
        "hobbies": ["Música", "Videojuegos", "Programación"],
        "location": "España"
    }

@router.get("/projects")
async def get_projects():
    return [
        {
            "id": 1,
            "name": "Portfolio 2025",
            "description": "Mi portfolio personal con diseño moderno y animaciones fluidas",
            "technologies": ["React", "Next.js", "Python", "FastAPI", "Tailwind CSS", "TypeScript"],
            "github": "https://github.com/CharlyLizard/PortFolio_2025",
            "demo": "https://mi-portfolio.vercel.app",
            "image": "/images/portfolio-preview.png",
            "featured": True
        },
        {
            "id": 2,
            "name": "GameTracker TFG",
            "description": "Aplicación fullstack para gestión de videojuegos y juegos interactivos",
            "technologies": ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Tailwind CSS", "TypeScript","Astro JS"],
            "github": "https://github.com/CharlyLizard/GameTracker",
            "demo": "https://gametracker-navy.vercel.app/",
            "image": "/images/gametracker.png",
            "featured": True
        },
        {
            "id": 3,
            "name": "Proyecto Citas SStratey",
            "description": "Aplicación de citas con funcionalidades avanzadas de búsqueda y filtrado",
            "technologies": ["Angular 19", "SpringBoot", "SQL", "Java 24", "Tailwind CSS"],
            "github": "https://github.com/CharlyLizard/PROYECTO_RESERVAS_SSTRATEGY",
            "demo": "https://github.com/CharlyLizard/PROYECTO_RESERVAS_SSTRATEGY",
            "image": "/images/api-preview.png",
            "featured": False
        }
    ]

@router.get("/experience")
async def get_experience():
    return [
        {
            "id": 1,
            "company": "Empresa Innovadora S.L.",
            "role": "Desarrollador Senior Fullstack",
            "period": "2023 - Presente",
            "description": "Desarrollo y mantenimiento de aplicaciones web modernas usando React, Node.js y Python.",
            "technologies": ["React", "Node.js", "Python", "AWS", "Docker"],
            "location": "Madrid, España"
        },
        {
            "id": 2,
            "company": "StartUp TechFlow",
            "role": "Desarrollador Fullstack",
            "period": "2021 - 2023",
            "description": "Creación de plataformas web escalables y APIs RESTful para productos digitales.",
            "technologies": ["Vue.js", "Express", "MongoDB", "Firebase"],
            "location": "Barcelona, España"
        },
        {
            "id": 3,
            "company": "Freelance",
            "role": "Desarrollador Web",
            "period": "2020 - 2021",
            "description": "Desarrollo de sitios web personalizados y aplicaciones web para pequeñas empresas.",
            "technologies": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            "location": "Remoto"
        }
    ]

@router.get("/skills")
async def get_skills():
    return {
        "frontend": [
            {"name": "React", "level": 90, "icon": "⚛️"},
            {"name": "Next.js", "level": 85, "icon": "▲"},
            {"name": "TypeScript", "level": 80, "icon": "📘"},
            {"name": "Tailwind CSS", "level": 95, "icon": "🎨"},
            {"name": "Vue.js", "level": 75, "icon": "💚"}
        ],
        "backend": [
            {"name": "Python", "level": 90, "icon": "🐍"},
            {"name": "FastAPI", "level": 85, "icon": "⚡"},
            {"name": "Node.js", "level": 80, "icon": "💚"},
            {"name": "Express", "level": 75, "icon": "🚀"},
            {"name": "PostgreSQL", "level": 70, "icon": "🐘"}
        ],
        "tools": [
            {"name": "Git", "level": 90, "icon": "🔧"},
            {"name": "Docker", "level": 75, "icon": "🐳"},
            {"name": "AWS", "level": 70, "icon": "☁️"},
            {"name": "VS Code", "level": 95, "icon": "💻"},
            {"name": "Figma", "level": 60, "icon": "🎨"}
        ]
    }

@router.get("/contact")
async def get_contact_info():
    return {
        "email": "carlos.martin.dev@gmail.com",
        "github": "https://github.com/CharlyLizard",
        "linkedin": "https://www.linkedin.com/in/carlos-mart%C3%ADn-salvatierra-275b45166/",
        "website": "https://carlosmartin.dev",
        "location": "España",
        "available": True,
        "timezone": "Europe/Madrid"
    }