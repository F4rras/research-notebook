

export interface ResearchDetail {
    slug: string;
    researchQuestion: string;
    background: string;
    hypothesis: string;
    methodology: string[];
    results: string;
    discussion: string;
    conclusion: string;
}

export const researchDetails: ResearchDetail[] = [
    {
        slug: "hymlet",

        researchQuestion:
            "Can a combination of physiological health indicators collected through a wearable device be used as features for a Machine Learning model to estimate blood glucose levels non-invasively?",

        background:
            "Blood glucose monitoring is commonly performed using invasive methods that require blood sampling. HYMLET (Hygeia Medical Bracelet) is developed as a research project exploring a non-invasive approach by utilizing multiple physiological indicators collected through a wearable device. The system integrates sensors such as the MAX30102 and MLX90614 with an ESP32 to collect health-related data, including heart rate, SpO₂, and body temperature. These physiological indicators are then used as features for a Machine Learning model to learn the relationship between physiological conditions and blood glucose levels.",

        hypothesis:
            "A combination of multiple physiological indicators can provide more meaningful information than a single indicator alone, allowing a Machine Learning model to learn patterns between physiological data and blood glucose levels and potentially estimate blood glucose non-invasively.",

        methodology: [
            "Design and develop the HYMLET wearable device using an ESP32 as the main microcontroller.",
            "Integrate the MAX30102 sensor to collect heart rate and SpO₂ data and the MLX90614 sensor to collect temperature data.",
            "Collect multiple physiological indicators to build the research dataset.",
            "Combine physiological data with corresponding blood glucose measurements as the target variable for Machine Learning.",
            "Preprocess, clean, and normalize the collected data to improve dataset quality.",
            "Perform feature engineering and analyze the relationship between physiological indicators and blood glucose levels.",
            "Train and evaluate multiple Machine Learning models to learn patterns between physiological indicators and blood glucose levels.",
            "Evaluate model performance using appropriate metrics to determine its ability to estimate blood glucose levels."
        ],

        results:
            "The research is currently ongoing. Data collection and system development are being carried out to build a dataset containing multiple physiological indicators and corresponding blood glucose measurements. The collected data will be used to train and evaluate Machine Learning models for blood glucose estimation.",

        discussion:
            "The discussion will focus on the relationship between physiological indicators and blood glucose levels, as well as the performance and limitations of the developed Machine Learning models. Further analysis will be conducted after sufficient data has been collected and the models have been evaluated.",

        conclusion:
            "The final conclusion has not yet been determined because the research is still ongoing. The study aims to evaluate the potential of combining multiple physiological indicators with Machine Learning for non-invasive blood glucose estimation. The conclusion will be established based on the results of the completed experiments and model evaluation.",
    },
];