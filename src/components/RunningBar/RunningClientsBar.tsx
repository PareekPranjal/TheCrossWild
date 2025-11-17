import React from 'react';

/**
 * A responsive running text bar component for Next.js and Tailwind CSS.
 * It uses Next.js's built-in styled-jsx for the CSS animation,
 * so no separate CSS file or config is needed.
 */
const RunningBar = () => {
    const text = "Based in Jaipur, we are proud to be a leading t-shirt manufacturer, bag manufacturer, and custom cap manufacturer.";

    return (
        <>
            {/* This <style jsx> block is specific to Next.js.
              It scopes the CSS animation to this component only.
            */}
            <style jsx>{`
                .animate-scroll-left {
                    /* This applies the CSS animation defined below */
                    animation: scroll-left 25s linear infinite;
                }

                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        /* This moves the text left by 50% of its total width,
                           which is the length of one copy of the text,
                           creating a seamless loop. */
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            {/* This is the component's JSX structure.
              It uses standard Tailwind classes for styling.
            */}
            <div className="bg-black text-white py-2 overflow-hidden whitespace-nowrap w-full box-border">
                {/* The 'animate-scroll-left' class from the <style> tag is applied here.
                  'inline-block' is necessary for the animation to work correctly.
                */}
                <div className="animate-scroll-left inline-block">
                    {/* The text is duplicated to create the seamless loop.
                      'pr-12' (padding-right: 3rem) adds spacing between the two copies.
                    */}
                    <span className="inline-block pr-12 text-sm font-medium">
                        {text}
                    </span>
                    <span className="inline-block pr-12 text-sm font-medium" aria-hidden="true">
                        {text}
                    </span>
                </div>
            </div>
        </>
    );
};

export default RunningBar;