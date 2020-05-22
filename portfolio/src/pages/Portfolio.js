import React from 'react';
import Project from '../components/Project'

const Portfolio = () => {
    return (
        <div>
    <div className="container">
    <main className="row">
      <div className="col-md-8">
        <article className="block">
          <h1 className="block-header">Portfolio</h1>
          <div class="row">
          <Project name="FriendlyFire" 
        src="assets/imgs/FFscreenshot.png"
         deployURL="https://secure-tor-59417.herokuapp.com/" 
          repoURL="https://github.com/RicardoLRjr/FriendlyFire" />
        <Project
        name="PokeTeam Manager"
        src="assets/imgs/PokeTeamManager.png"
        deployURL="https://game-related-app.herokuapp.com"
        repoURL="https://github.com/RicardoLRjr/Project-2-working-title-"/>
        </div>
        <div class="row"> 
        <Project name="Brew2You" 
        src="assets/imgs/ProjectFunction.png"
         deployURL="https://ricardolrjr.github.io/Brew-2-You/" 
          repoURL="https://github.com/RicardoLRjr/Brew-2-You" />
        <Project
        name="Eat the Burger"
        src="assets/imgs/EatDaBurgerReadme.gif"
        deployURL="https://evening-shelf-95210.herokuapp.com"
        repoURL="https://github.com/RicardoLRjr/Eat-the-burger"/>
        </div>
        <div class="row">
          <Project
        name="Employee Management System"
        src="assets/imgs/EmployeeManagerDemonstration.gif"
        repoURL="https://github.com/RicardoLRjr/SQL-Employee-Tracker"/>
        <Project
        name="Day Planner"
        src="assets/imgs/DayPlanner.png"
        deployURL="https://ricardolrjr.github.io/3-13-2020-HW/"
        repoURL="https://github.com/RicardoLRjr/3-13-2020-HW"/>
        </div>
        </article>
      </div>
    </main>
  </div>
        </div>
    );
};

export default Portfolio;