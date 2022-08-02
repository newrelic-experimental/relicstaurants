import { Title, ViewWrapper } from 'components/common';
import React from 'react';

const Help = () => {
  return (
    <ViewWrapper>
      <Title>Help</Title>
      <p
        style={{
          width: '800px',
        }}
      >
        The Relicstaurants repository was created so that you can test New Relic
        observability on a small but real project. You don't have to create a
        special application just to practice, we did it for you. So go ahead and
        copy the repository, run it locally and try to implement observability
        for this project yourself. You can find a tip on what the finished
        project looks like on the "Observability" branch. <br />
        <p>
          The Relicstaurants app has been adapted from the FoodMe Angular
          application found at{' '}
          <a href="https://github.com/IgorMinar/foodme">
            https://github.com/IgorMinar/foodme3
          </a>
        </p>
      </p>
    </ViewWrapper>
  );
};

export default Help;
