import { useEffect } from "react";

interface LoadCustomScriptsProps {
    scripts: string[]; // array of script paths
}

const LoadCustomScripts = ({ scripts }: LoadCustomScriptsProps) => {
    useEffect(() => {
        const scriptElement: HTMLScriptElement[] = [];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
            scriptElement.push(script);
        });

        return () => {
            scriptElement.forEach(script => {
                document.body.removeChild(script);
            });
        };
    }, [scripts]);
    
    return null;
}

export default LoadCustomScripts;