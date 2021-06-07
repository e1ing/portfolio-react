import React from 'react';
import style from './Projects.module.css';
import {Project} from "./project/Project";
import styleContainer from "../common/styles/Container.module.css"

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}> Projects </h2>
                <div className={style.projects}>
                    <Project
                        projectTitle={'Social Network'}
                        projectDescription={'A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors. The social network perspective provides a set of methods for analyzing the structure of whole social entities as well as a variety of theories explaining the patterns observed in these structures.[1] The study of these structures uses social network analysis to identify local and global patterns, locate influential entities, and examine network dynamics.'}
                        linkUrl ={''}
                    />
                    <Project
                        projectTitle={'Todolist'}
                        projectDescription={'Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and acts as a memory aid. As technology has evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists, todo list apps, microsoft to do and google to do list to name a few. You can use a to do list in your home and personal life, or in the workplace.'}
                        linkUrl ={''}
                    />
                </div>
            </div>
        </div>

    )
}