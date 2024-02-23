import React, { useEffect, useState } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Define the type for props
interface ViewCounterProps {
    slug: string;
    noCount?: boolean;
    showCount?: boolean;
}

const supabase = createClientComponentClient();

const ViewCounter: React.FC<ViewCounterProps> = ({ slug, noCount = false, showCount = true }) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementView = async () => {
            try {
                let { error } = await supabase.rpc("increment", { slug_text: slug });
                if (error) {
                    console.error("Error incrementing view count inside try block:", error);
                } else {
                    // Update views count if increment was successful
                    setViews(prevViews => prevViews + 1);
                }
            } catch (error) {
                console.error("An error occurred while incrementing the view count:", error);
            }
        };

        if (!noCount) {
            incrementView();
        }
    }, [slug, noCount]);

    useEffect(() => {
        const getViews = async () => {
            try {
                
                let { data, error } = await supabase
                .from('views')
                .select('count')
                .match({slug : slug})
                .single()

                if (error) {
                    console.error("Error incrementing view count inside try block:", error);
                } else {
                    // Update views count if increment was successful
                    setViews(data ? data.count : 0);
                }
            } catch (error) {
                console.error("An error occurred while incrementing the view count:", error);
            }
        };

        if (!noCount) {
            getViews();
        }
    }, [slug]);

    if (showCount) {
        return (
            <div>{views} views</div>
        );
    } else {
        return null; // Render nothing if showCount is false
    }
};

export default ViewCounter;
