import {PRIMARY_STATISTICS, STATISTIC_CONFIGS} from '../constants';

import classnames from 'classnames';
import React, {useState, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {useSpring, animated, config} from 'react-spring';
import {useMeasure} from 'react-use';

const MapSwitcher = ({mapStatistic, setMapStatistic}) => {
  const [mapSwitcher, {width}] = useMeasure();
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [spring, set] = useSpring(() => ({
    opacity: 0,
    background: '#D8CFC7',  //`${STATISTIC_CONFIGS[mapStatistic].color}20`,
    transform: `translateY(${
       PRIMARY_STATISTICS.indexOf(mapStatistic) * 115
    }px)`,
    config: config.gentle,
  }));

  useEffect(() => {
    if (width > 0) {
      ReactDOM.unstable_batchedUpdates(() => {
        set({
          transform: `translateY(${
            PRIMARY_STATISTICS.indexOf(mapStatistic) * 115
          }px)`,
          opacity: 0.7,
          background:  '#D8CFC7', //'#0DDBE820',
          delay: count === 0 ? 1500 : 0,
          onStart: setClicked.bind(this, true),
          onRest: setClicked.bind(this, false),
        });
      });
    }
  }, [count, mapStatistic, set, width]);

  const handleClick = useCallback(
    (statistic) => {
      setCount((prevCount) => prevCount + 1);
      setMapStatistic(statistic);
    },
    [setMapStatistic]
  );

  return (
    <div className="MapSwitcher" ref={mapSwitcher}>
      <animated.div className="highlight" style={spring}></animated.div>

      {PRIMARY_STATISTICS.map((statistic, index) => (
        <div
          key={index}
          className={classnames('clickable', {[`is-${statistic}`]: !clicked})}
          onClick={handleClick.bind(this, statistic)}
        ></div>
      ))}
    </div>
  );
};

const isEqual = (prevProps, currProps) => {
  if (prevProps.mapStatistic !== currProps.mapStatistic) {
    return false;
  }
  return true;
};

export default React.memo(MapSwitcher, isEqual);
