import { useState } from "react";

import bugImgUrl from '../../assets/bug.svg';
import ideiaImgUrl from '../../assets/ideia.svg';
import thoughtImgUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        image: {
            source: bugImgUrl,
            alt: 'Image of an insect'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideiaImgUrl,
            alt: 'Image of a light bulb'
        },
    },
    ANOTHER: {
        title: 'Another',
        image: {
            source: thoughtImgUrl,
            alt: 'Image of a thought cloud'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} /> 
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        /> 
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                By developer <a className="underline underline-offset-2" href="https://github.com/caard0s0" target="_blank">Vinicius</a> 
            </footer>

        </div>
    );
}
