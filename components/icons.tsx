import React from 'react';

export const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l.354-.354a3.75 3.75 0 0 0-5.303-5.303l-.354.354M3 21l3.75-3.75m.75-3 3-3M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const ArrowPathIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.092-1.21.138-2.43.138-3.662Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c1.355 0 2.707-.157 4.008-.462M12 21c-1.355 0-2.707-.157-4.008-.462m0 0A9.004 9.004 0 0 1 12 3c1.355 0 2.707.157 4.008.462m-8.016 0A9.004 9.004 0 0 0 12 3c1.355 0 2.707.157 4.008.462m0 0A9.004 9.004 0 0 1 20.716 7.253M3.284 7.253A9.004 9.004 0 0 0 12 21a9.004 9.004 0 0 0 8.716-6.747M12 3c-4.82 0-8.716 3.91-8.716 8.747M12 3c4.82 0 8.716 3.91 8.716 8.747" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);
  
export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const StarIcon: React.FC<{ className?: string; filled: boolean }> = ({ className, filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="1.5" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 21.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

export const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#34A853" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C42.612,36.33,44,30.651,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FBBC05" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#EA4335" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238c-2.008,1.521-4.504,2.43-7.219,2.43 c-5.218,0-9.651-3.47-11.283-8.169l-6.571,4.819C9.656,39.663,16.318,44,24,44z"/>
        <path fill="none" d="M4,4h40v40H4z"/>
    </svg>
);

// Simplified Flag Icons as components
export const FlagIcon: React.FC<{ code: string; className?: string }> = ({ code, className }) => {
    // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
    const flagPaths: { [key: string]: React.ReactElement } = {
        nl: <g><rect width="9" height="6" fill="#21468B"/><rect width="9" height="4" fill="#fff"/><rect width="9" height="2" fill="#AE1C28"/></g>,
        en: <g>
                <rect width="9" height="6" fill="#012169"/>
                <path d="M0,0 9,6 M9,0 0,6" stroke="#fff" strokeWidth="1.2"/>
                <path d="M0,0 4.5,3 0,3z M4.5,3 9,0 9,3z M0,6 4.5,3 0,3z M4.5,3 9,6 9,3z" fill="#C8102E"/>
                <path d="M4.5,0v6 M0,3h9" stroke="#fff" strokeWidth="2"/>
                <path d="M4.5,0v6 M0,3h9" stroke="#C8102E" strokeWidth="1.2"/>
            </g>,
        tr: <g><rect width="9" height="6" fill="#E30A17"/><path d="M3.75 1.5a1.5 1.5 0 100 3 1.2 1.2 0 110-3z" fill="#fff" /><path d="m5.16 2.58.23.49h.52l-.42.3.16.51-.42-.3-.42.3.16-.51-.42-.3h.52z" fill="#fff" /></g>,
        pl: <g><rect width="9" height="6" fill="#fff" /><rect y="3" width="9" height="3" fill="#dc143c" /></g>,
        bg: <g><rect width="9"height="6" fill="#fff" /><rect y="2" width="9" height="2" fill="#00966e" /><rect y="4" width="9" height="2" fill="#d62612" /></g>,
        ar: <g><rect width="9" height="6" fill="#fff"/><rect y="0" width="9" height="2" fill="#000"/><rect y="2" width="9" height="2" fill="#009639"/><polygon points="0,0 0,6 3,3" fill="#ED2E38"/></g>,
        de: <g><rect width="9" height="6" /><rect y="2" width="9" height="2" fill="#dd0000" /><rect y="4" width="9" height="2" fill="#ffce00" /></g>,
        hu: <g><rect width="9" height="6" fill="#ce2939" /><rect y="2" width="9" height="2" fill="#fff" /><rect y="4" width="9" height="2" fill="#477050" /></g>,
        fr: <g><rect width="9" height="6" fill="#002395" /><rect x="3" width="6" height="6" fill="#fff" /><rect x="6" width="3" height="6" fill="#ed2939" /></g>,
    };

    return (
        <svg viewBox="0 0 9 6" className={className} xmlns="http://www.w3.org/2000/svg">
            {flagPaths[code.toLowerCase()] || <rect width="9" height="6" fill="#888" />}
        </svg>
    );
};