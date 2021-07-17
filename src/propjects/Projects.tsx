import React from 'react';
import style from './Projects.module.scss';
import {Project} from './project/Project';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/image/maxresdefault.jpg'
import socialNetworkImage from  './../assets/image/3.jpg'

export const Projects = () => {
    const social = {
        backgroundImage: `url(${todoImage})`,
    };
    const todo = {
        backgroundImage: `url(${socialNetworkImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project
                        style = {social}
                        projectTitle={'Social Network'}
                        projectDescription={'A social network is a social.'}
                        linkUrl ={''}
                    />
                    <Project
                        style = {todo}
                        projectTitle={'Todolist'}
                        projectDescription={'Most typically, they’re organised in order of priority.'}
                        linkUrl ={''}
                    />
                </div>
            </div>
        </div>

    )
}