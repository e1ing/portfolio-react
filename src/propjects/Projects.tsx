import React from 'react';
import style from './Projects.module.scss';
import {Project} from './project/Project';
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/image/todo.jpg'
import socialNetworkImage from  './../assets/image/social-network.png'
import cardsImage from  './../assets/image/cards_photo.jpg'
import rickandmorty from  './../assets/image/rickandmorty.jpg'
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
                        linkUrl ={'https://github.com/e1ing/social-network-ts'}
                    />
                    <Project
                        styleImg= {todoImage}
                        projectTitle={'Todolist'}
                        projectDescription={'Most typically, they’re organised in order of priority.'}
                        linkUrl ={'https://github.com/e1ing/todolist-ts-v'}
                    />
                    <Project
                        styleImg= {cardsImage}
                        projectTitle={'Learning cards'}
                        projectDescription={'Most typically, they’re organised in order of priority.Most typically, they’re organised in order of priority.Most typically, they’re organised in order of priority.Most typically, they’re organised in order of priority.'}
                        linkUrl = {'https://github.com/e1ing/learning-cards'}
                    />
                    <Project
                        styleImg= {rickandmorty}
                        projectTitle={'Rick and Morty'}
                        projectDescription={'Rick and Morty.....'}
                        linkUrl ={'https://github.com/e1ing/rick-and-morty-catalog'}
                    />
                </div>
            </div>
            </Fade>
        </div>

    )
}