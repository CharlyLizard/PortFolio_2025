import { AboutInfo } from "../models/AboutInfo";
import { Project } from "../models/Project";
import { Experience } from "../models/Experience";
import { SkillsData } from "../models/SkillsData";
import { ContactInfo } from "../models/ContactInfo";

const API_BASE_URL = "http://localhost:8001/api";

export async function getAboutInfo(): Promise<AboutInfo> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio/about`);
    if (!res.ok) throw new Error("No se pudo obtener la información personal");
    return res.json();
  } catch (error) {
    console.error("Error obteniendo información personal:", error);
    throw error;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio/projects`);
    if (!res.ok) throw new Error("No se pudieron obtener los proyectos");
    return res.json();
  } catch (error) {
    console.error("Error obteniendo proyectos:", error);
    throw error;
  }
}

export async function getExperience(): Promise<Experience[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio/experience`);
    if (!res.ok) throw new Error("No se pudo obtener la experiencia");
    return res.json();
  } catch (error) {
    console.error("Error obteniendo experiencia:", error);
    throw error;
  }
}

export async function getSkills(): Promise<SkillsData> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio/skills`);
    if (!res.ok) throw new Error("No se pudieron obtener las habilidades");
    return res.json();
  } catch (error) {
    console.error("Error obteniendo habilidades:", error);
    throw error;
  }
}

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio/contact`);
    if (!res.ok) throw new Error("No se pudo obtener la información de contacto");
    return res.json();
  } catch (error) {
    console.error("Error obteniendo información de contacto:", error);
    throw error;
  }
}