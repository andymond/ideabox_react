import React from 'react';
import IdeaCard from './IdeaCard';

const IdeasContainer = ({ideas, removeIdea}) => {

  const ideaCards = ideas.map(idea => <IdeaCard {...idea} removeIdea={removeIdea} />)

  return(
    <div className='IdeasContainer'>
      { ideaCards }
    </div>
  )
}

export default IdeasContainer;
