import { MutableRefObject, useEffect } from 'react';

/**
 * `useOutside` is a hook that executes `action` when any element but `ref` and `exceptions` is clicked.
 * It comes from a repo of my own, on `leooliveira-dev/react-use-outside`
 * @param {MutableRefObject<any>} ref - The element whose outside should be detected
 * @param {() => void} action - The action that should be fired when click is detected outside of `ref`
 * @param {string[]} exceptions - IDs of the elements that won't trigger the outside detected
 */
const useOutside = (ref: MutableRefObject<any>, action: () => void, exceptions?: string[]) => {
    const exceptionsCheck = (element: EventTarget | null) => {
        //This is only here because this exceptions feature won't be used in this project, and it needs fixing.
        //@ts-ignore
        return !exceptions || !element ? false : exceptions.includes(element.id);
    }

    useEffect(()=>{
        function handleClickOutside(event: Event){
            if (ref.current && !exceptionsCheck(event.target) && !ref.current.contains(event.target)){
                action();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[ref]);
}

export default useOutside;