import React from 'react';
import { Link } from 'react-router-dom';

const DirectorsOverview = ({ directors = [] }) => {
  return (
    <section className="directorsOverviewBlock" data-scroll-inview="" data-scroll="">
      <div className="innerWrapper">
        <div className="contentWrapper" data-show-mouse="" data-mouse-color="white">
          <div className="titleWrapper">
            <h1 className="smallTitle animLetters" data-letters="">
              meet our roster
            </h1>
            <div className="line inview" data-line="" data-scroll-inview=""></div>
          </div>

          <div className="directors">
            {directors.map((director, index) => {
              const isOdd = index % 2 === 1;
              const transformStyle = getTransformStyle(index, director.slug);

              return (
                <div
                  key={director.id || index}
                  className="wrap"
                  data-odd={isOdd ? "true" : undefined}
                >
                  <Link
                    to={director.href || `/directors/${director.slug}`}
                    className="director"
                    title={director.name}
                    style={transformStyle}
                  >
                    <h2 className="bigTitle directTitle">
                      <FormatNamePart text={director.firstName} />

                      <span className="imageWrapper">
                        <span
                          className="innerImage"
                          style={{
                            transform: director.imageScale ?
                              `scale(${director.imageScale})` :
                              'translate(0px, 0px)'
                          }}
                        >
                          <picture className="directorPortrait">
                            <source
                              srcSet={director.thumbnailSrcSet || director.thumbnail}
                              sizes="140px"
                            />
                            <img
                              className="directorPortrait"
                              src={director.thumbnail}
                              width={director.thumbnailWidth || "140"}
                              height={director.thumbnailHeight || "200"}
                              alt={director.thumbnailAlt || `Thumbnail ${director.name}`}
                              loading="lazy"
                            />
                          </picture>
                        </span>
                      </span>

                      {/* Last name part with italic styling */}
                      <span className="lastName">
                        <FormatNamePart text={director.lastName} />
                      </span>
                    </h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Helper component to format name text with italic A/O
 */
const FormatNamePart = ({ text }) => {
  if (!text) return null;

  const parts = [];
  let currentIndex = 0;
  const regex = /[AO]/gi;

  text.replace(regex, (match, index) => {
    if (index > currentIndex) {
      parts.push(text.substring(currentIndex, index));
    }
    parts.push(<i key={index}>{match}</i>);
    currentIndex = index + 1;
    return match;
  });

  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts.length > 0 ? parts : text;
};

/**
 * Helper function to calculate transform styles based on director
 */
const getTransformStyle = (index, slug) => {
  // Custom transforms based on specific directors
  const transformMap = {
    'audrey-mascina': 'translate(-1.2712px, 0px) skew(-0.20339deg, -0.0254237deg)',
    'cinzia-pedrizzetti': 'translate(1.2712px, 0px) skew(-0.20339deg, -0.0254237deg)',
    'claudia-biondini': 'translate(-125.556px, 0px) skew(-20.0889deg, -2.51111deg)',
    'elisha-smith-leverock': 'translate(-27.1654px, 0px) skew(-4.34646deg, -0.543307deg)',
    'gregoris-rentis': 'translate(0px, 0px)',
    'jan-svejkar': 'translate(0px, 0px)',
    'kay-kienzler': 'translate(0px, 0px)',
    'marek-partys': 'translate(0px, 0px)',
    'marko-roth': 'translate(125.258px, 0px) skew(-20.0412deg, -2.50515deg)',
    'michael-lockshin': 'translate(-38.6905px, 0px) skew(-6.19048deg, -0.77381deg)',
    'nalle-sjoblad': 'translate(53px, 0px) skew(-8.48deg, -1.06deg)',
    'neda': 'translate(-120.895px, 0px) skew(-19.3433deg, -2.41791deg)',
    'victor-claramunt': 'translate(141.509px, 0px) skew(-22.6415deg, -2.83019deg)',
  };

  if (slug && transformMap[slug]) {
    return { transform: transformMap[slug] };
  }

  // Fallback transforms based on index
  const transforms = [
    'translate(-1.2712px, 0px) skew(-0.20339deg, -0.0254237deg)',
    'translate(1.2712px, 0px) skew(-0.20339deg, -0.0254237deg)',
    'translate(-125.556px, 0px) skew(-20.0889deg, -2.51111deg)',
    'translate(-27.1654px, 0px) skew(-4.34646deg, -0.543307deg)',
    'translate(0px, 0px)',
    'translate(0px, 0px)',
    'translate(0px, 0px)',
    'translate(0px, 0px)',
    'translate(125.258px, 0px) skew(-20.0412deg, -2.50515deg)',
    'translate(-38.6905px, 0px) skew(-6.19048deg, -0.77381deg)',
    'translate(53px, 0px) skew(-8.48deg, -1.06deg)',
    'translate(-120.895px, 0px) skew(-19.3433deg, -2.41791deg)',
    'translate(141.509px, 0px) skew(-22.6415deg, -2.83019deg)',
  ];

  return transforms[index] ? { transform: transforms[index] } : { transform: 'translate(0px, 0px)' };
};

export default DirectorsOverview;
