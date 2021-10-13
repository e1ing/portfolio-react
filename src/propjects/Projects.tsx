import React from 'react';
import style from './Projects.module.scss';
import {Project} from './project/Project';
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/image/todo.jpg'
import socialNetworkImage from  './../assets/image/social_network.jpg'
import cardsImage from  './../assets/image/cards_photo.jpeg'
import {Fade} from "react-awesome-reveal";

export const Projects = () => {

    return (
        <div id="projects" className={style.projectsBlock}>
            <Fade>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project
                        styleImg= {socialNetworkImage}
                        projectTitle={'Social Network'}
                        projectDescription={'A social network is a social.'}
                        linkUrl ={''}
                    />
                    <Project
                        styleImg= {todoImage}
                        projectTitle={'Todolist'}
                        projectDescription={'Most typically, they’re organised in order of priority.'}
                        linkUrl ={''}
                    />
                    <Project
                        styleImg= {cardsImage}
                        projectTitle={'Learning cards'}
                        projectDescription={'Most typically, they’re organised in order of priority.Most typically, they’re organised in order of priority.Most typically, they’re organised in order of priority.Most typically, they’re organised in order of priority.'}
                        linkUrl = {''}
                    />
                </div>
            </div>
            </Fade>
        </div>

    )
}