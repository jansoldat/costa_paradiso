import cs from "classnames";
import PropTypes from "prop-types";
import { Element } from "react-scroll";

export const Section = ({
  className,
  children,
  kind,
  bgImage,
  isLast,
  slug,
  heading,
}) => {
  const sectionKind = `section--${kind}`;
  const sectionName = `section__${slug}`;

  return (
    <Element name={sectionName}>
      <section
        className={cs("section", sectionKind, sectionName, className)}
        id={sectionName}
      >
        <span
          className="section__bg-img lazy-background"
          style={bgImage && { backgroundImage: `url("${bgImage}")` }}
        />

        {kind === "dark" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 84.871"
            className="section__wave--top"
          >
            <path
              d="M692.327,33.735C304.011-33.916,37.071,67.424,0,82.655v2.215h1400V3.815 C1153.911,64.124,1118.931,108.057,692.327,33.735z"
              className="section__curve"
            />
          </svg>
        )}

        <div className="container">
          <h1>{heading}</h1>
          {children}
        </div>

        {kind === "dark" && !isLast && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="section__wave section__wave--bottom"
            viewBox="0 0 1400 84.871"
          >
            <path
              d="M692.327,33.735C304.011-33.916,37.071,67.424,0,82.655v2.215h1400V3.815 C1153.911,64.124,1118.931,108.057,692.327,33.735z"
              className="section__curve"
            />
          </svg>
        )}
      </section>
    </Element>
  );
};

Section.propTypes = {
  kind: PropTypes.oneOf(["dark", "light"]),
  className: PropTypes.string,
  isLast: PropTypes.bool,
  translations: PropTypes.array,
  bgImage: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
