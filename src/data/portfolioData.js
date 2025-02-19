export const portfolioData = {
    personalInfo: {
      name: "Keerthi Krishna Aiyappan",
      title: "Data Science and Analytics Professional",
      email: "keerthikrishna.official@gmail.com",
      phone: "315-374-9628",
      github: "https://github.com/akk1011",
      linkedin: "https://www.linkedin.com/in/keerthi-krishnaa/",
      tableau: "https://public.tableau.com/app/profile/keerthi.krishna/vizzes",
      about: "3.5 years of turning data chaos into clarity across pharma, healthcare, sports, and tech industries. From predictive models to dynamic dashboards, from data mining to automated reporting, I crunch numbers, one dataset at a time. MS in Applied Data Science candidate at Syracuse University. Arsenal fan, 'The Wire' appreciator, 'Modern Family' enjoyer and admirer of Leo Messi's genius, Rafael Nadal's perseverance and Bukayo Saka's existence."  
    },
    experience: [
      {
        role: "Data Strategy and Operations Intern",
        company: "GSK (ViiV Healthcare)",
        location: "Durham, NC, USA",
        period: "June 2024 - Present",
        highlights: [
          "Deployed a Hypothesis Testing algorithm in R, measuring the impact of a parallel data strategy on patient data stewardship on 3+ metrics in an Azure Databricks environment, validating a 5% reduction in data duplicates improving data reliability for healthcare analytics",
          "Automated the reporting and generation of 150+ slides of HIV claims data using Plotly and Databricks UI, reducing manual slide creation time by 80% and accelerating insights delivery for stakeholders",
          "Analyzed weekly sales data for two products, using DAX in Power BI, Window Functions, Views and CTEs in SQL in an Azure Databricks environment, delivering trend and forecast reports to 5+ internal business partners",
          "Led UAT testing, data validation, and error/bug documentation, contributing to future dashboard enhancement development and ensuring platform migration of 400+ users from an internal app to Power BI",
          "Collaborated as a team of two to build an anomaly detection and data monitoring dashboard using Power BI, implementing logics to identify irregular data changes and improve data quality monitoring"
        ]
      },
      {
        role: "Data Science and Analytics Associate",
        company: "NA Sportz Interactive",
        location: "Mumbai, MH, India",
        period: "November 2021 - June 2023",
        highlights: [
          "Engineered an Expected Goals predictive model using xGBoost and Gradient Boost with 8 features, transforming the company’s analytics capabilities by yielding an accuracy of 93% in predicting the likelihood of a shot ending in a goal",
          "Developed a multivariate A/B Testing model, using SciPy and Statsmodels, to optimize the MatchCentre icon placement on the home page of a client website, resulting in a 9% increase in page clicks",
          "Identified and automated 25+ KPIs to track soccer player and team performance metrics, leveraging tidyverse and ggplot in R, and CTEs, Window Functions, and Joins in SQL, delivering daily reports to clients and senior management",
          "Built a clustering model using K-Means Clustering, Principal Component Analysis and Scikit-learn to group 60+ Indian soccer players based on their roles using 30+ features, enhancing player performance evaluation capabilities",
          "Devised initial ratings for 200+ players for the official UEFA Champions League fantasy game using SciPy, pandas and NumPy, eliminating errors caused by human biases",
          "Streamlined the creation of sport highlight packages Scipy Optimizers in Python, cutting video editing time by 80%"
        ]
      },
      {
        role: "Data Scientist",
        company: "BilledRight Healthcare Solutions",
        location: "Chennai, TN, India",
        period: "June 2020 - May 2021",
        highlights: [
          "Managed the Extract, Transform and Load of 10+ business processes using Glue and Athena within AWS, transforming business processes into data tables for reporting and dashboards",
          "Operated as the technical lead to build a health claims risk stratification model using Random Forest and Gradient Boost, assessing the risk of policyholders with 85% accuracy, enabling clients to set personalized insurance premiums",
          "Crafted over 10 dashboards in Tableau identifying 10+ KPIs, enhancing the delivery time of weekly reporting processes’",
          "Implemented a clustering solution to bucket 70+ key doctors based on their product preferences and communicative tendencies using K-Means Clustering and DBSCAN, enhancing sales representatives’ tailoring of product pitches",
          "Handled 100+ ad-hoc queries, using Window Functions and CTEs in SQL, improving client data understanding",
          "Developed 5+ reports in MS Excel utilizing Pivot Tables and VLOOKUPs, enhancing client-level channel data visibility"
        ]
      }
    ],
  
    skills: {
      "Programming & Visualization": ["Python", "R", "SQL", "Pyspark", "Tableau", "MS Excel"],
      "Cloud & Big Data Infrastructure": ["Spark","Snowflake", "Docker", "dbt", "Hadoop", "Airflow", "Kubernetes", "Git","BigQuery", "GCP", "Kafka", "MongoDB","Minio", "Hive","Cassandra","Drill","ElasticSearch"],
      "Libraries & Frameworks": ["Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Plotly", "Streamlit", "Statsmodels", "Spacy", "NLTK", "SciPy", "Shiny", "Caret", "ARIMA","SARIMA"],
      "Modeling & Optimization Techniques": ["Regression", "Classification", "Clustering", "Anomaly Detection", "Natural Language Processing", "Deep Learning", "Generative AI" , "Forecasting", "A/B Testing", "Hypothesis Testing", "ANOVA", "Root Cause Analysis", "Causal Inference"],
      "AWS Services": ["Lambda", "Athena", "S3", "Sagemaker", "Redshift", "QuickSight", "CloudWatch", "Glue", "RDS", "EC2"],
      "Azure Services": ["Databricks", "Data Factory", "Data Lake", "Synapse", "Power BI"],
    },
  
    projects: [
      {
        title: "Media Spend Cost Optimization",
        period: "February 2024 - May 2024",
        description: "Marketing spend optimization using Bayesian Marketing Mix Modeling and Scipy Optimizers",
        keyFeatures: [
          "Marketing Mix Modeling", "Shapley Methods", "Optimization", "Predictive Modelling", "Prescriptive Analytics",
          "SciPy Optimizers",
          "Naïve Bayes and Multiple Linear Regression"
        ],
        projectSuccess: ["Example Insights:",
          "TV ads contribute to 20% of sales revenue, while social media accounts for 10% of the sales revenue.",
"Consumers typically start purchasing a product 2 weeks after seeing TV ads, and 1 week after seeing newspaper ads.",
"Increasing the social media spending for product A above 10000 dollars yields no increase in sales returns.",
"Reducing the total media spend budget to 30,000 dollars and allocating 6,000 dollars of it to newspaper ads can lead to a 4% rise in product sales"
        ],
        techStack: [
          "Scikit-Learn",
          "SHAP Methods",
          "SciPy",
          "Multiple Linear Regression",
          "Lightweight MMM",
          "Naive Bayes",
          "Optuna Optimizers"
          
        ],
        additionalDetails: [
          "Designed a Marketing Mix Modeling solution for a shampoo brand leveraging Shapley Methods and Scipy Optimizers using Sagemaker and S3 buckets within AWS, optimizing spending across marketing channels to increase revenue by 6%",
          "Implemented Shapley methods, Optuna optimizers, and SciPy optimizers to fine-tune media allocation, leading to a $120,000 increase in revenue.",
          "Used Naıve Bayes and Multiple Linear Regression to build the final solution with an accuracy of 87% after hyperparameter tuning using GridSearch, enhancing model success",
          "Quantified Adstock and Carryover effects and applied Hill transformations, providing data-driven insights that enhanced overall marketing strategy.",
          "Tracked model performance using RMSE and MAPE, ensuring astute selection of models",
          "Ran simulations of various budgeting scenarios and calculated Return on Ad Spend (RoAS) for each scenario",
          "Studied the diminishing returns and the relationship between spend-share and effect-share through response curve analysis."

        ],
        link: "https://github.com/akk1011/marketing_mix_modelling"
      },
      {
        title: "Price Elasticity Modeling",
        period: "October 2024 - December 2024",
        description: "Dynamic pricing optimization system for retail",
        keyFeatures: [
          "PySpark-based large-scale data processing and machine learning",
          "Advanced optimization using L-BFGS-B and SLSQP",
          "Real-time price recommendation"
        ],
        projectSuccess: [
          "Example Insights: For product 54163, when decreasing product price from $11 to $8, there is an increase in quantity sold by 1.6% and a revenue change% of 32.1%.",
          "Increased revenue by 3.6% through optimized pricing strategies",
          "Processed 1M+ transaction records for price sensitivity analysis"
        ],
        techStack: [
          "PySpark",
          "SciPy Optimizers",
          "SQL",
          "Python",
          "Seaborn",
          "SparkMLlib",
          "Random Forest",
          "Gradient Boost",
          "Decision Trees"
        ],
        additionalDetails: [
          "Developed a feature engineering pipeline incorporating time based data split, price positioning, competitor metrics, historical price trends (30, 60, 90 days), promotional effects, and regional factors to capture demand behavior effectively",
          "Trained and compared Random Forest, Decision Tree, and Gradient Boosting Trees for demand forecasting, optimizing hyperparameters using cross-validation and evaluating models with RMSE, MAE, and MAPE.",
          "Achieved median absolute percentage error (MedAPE) of ~66-68%, with RMSE of 25 and MAE of 20, indicating that Gradient Boosting performed slightly better than other models in predicting demand elasticity.",
          "Implemented L-BFGS-B and SLSQP optimization techniques to identify optimal price points that maximize revenue while maintaining demand, ensuring business constraints like minimum quantity and competitor pricing logic were considered",
          "Demonstrated a 4.9% increase in product quantity sales by optimizing price points, with an example showing that reducing product price from $11 to $8 resulted in a 32.1% revenue increase due to higher demand."
        ],
        link: "https://github.com/akk1011/price_elasticity_pyspark"
      },
      
      {
        title: "Data Warehousing Solution",
        period: "September 2024 - December 2024",
        description: "Enterprise data warehouse for NY Metro Authority",
        keyFeatures: [
          "Enterprise Bus Architecture implementation",
          "Automated testing and documentation",
          "Real-time data integration pipeline"
        ],
        projectSuccess: [
          "Successfully integrated 5 critical business processes",
          "Created a scalable ETL pipeline",
          "Automated real-time data ingestion"
        ],
        techStack: [
          "SQL",
          "Snowflake",
          "dbt",
          "Power BI",
          "Kimball Methodology",
          "DDS",
          "Git",
        ],
        additionalDetails: [
          "Designed a scalable data warehousing solution for the NYC Metro Authority using Snowflake for data storage, dbt for ETL processes, and Power BI for reporting, improving data accessibility by 30%.",
"Developed 5 dimension tables, 2 bridge tables, and 5 fact tables, ensuring structured data organization to support real-time analytics for metro operations",
"Enhanced Power BI dashboard performance by integrating optimized SQL queries and efficient data models, reducing report load times by 40%",
"Enabled real-time updates on a multi-page Power BI dashboard, facilitating data-driven decision-making for 5+ key business processes within the NYC Metro Authority"

        ],
        link: "https://github.com/akk1011/transit_dwh"
      },
      
        {
          title: "Soccer Player Performance Dashboard",
          period: "September 2023 - January 2024",
          description: "Advanced sports analytics dashboard for evaluating soccer player performance using SQL and Tableau.",
          keyFeatures: [
            "SQL-based player performance analysis",
            "Interactive Tableau dashboard with visual insights",
            "Automated data integrity and migration processes"
          ],
          projectSuccess: [
            "Automated Reporting of Player Performance",
            "Designed a dynamic Tableau dashboard with six interactive panels, enabling advanced data-driven insights."
          ],
          techStack: [
            "SQL",
            "Tableau",
            "Python",
            "Draw.io"
          ],
          additionalDetails: [
            "Collaborated in a six-member team to develop a soccer player performance analytics platform.",
            "Executed the creation of three Up Down SQL Scripts for constraint implementation, data integrity assurance, standard enforcement, and data migration.",
            "Constructed SQL Views for seamless integration with external machine learning models.",
            "Utilized Draw.io to design logical and conceptual entity-relationship diagrams, addressing the underlying business case.",
            "Developed a user-friendly Tableau dashboard with six panels, incorporating beeswarm plots, shot maps, pass maps, and heatmaps to enable interactive exploration of player statistics."
          ],
          link: "https://public.tableau.com/app/profile/keerthi.krishna/viz/SoccerPlayerDashboard-FinalView/HOME"
        }
        ,
      {
        title: "Supply Chain Health Commodity Analysis",
        period: "January 2025 - May 2024",
        description: "Analyzing the shipment and transport of HIV drugs to identify cost drivers and optimize efficiency.",
        keyFeatures: [
          "Automated cost analysis",
          "Freight cost optimization",
          "Shipment mode impact assessment"
        ],
        projectSuccess: ["Example Insights:",
          "Identified that air transportation dominates freight expenses, accounting for 62.1% of the total cost (~$35 million), followed by trucking (17.8%) and ocean freight (5.6%).",
          "Determined that Cameroon, Kenya, and Nigeria have the highest average freight costs, highlighting regional disparities in supply chain expenses.",
          "Found that HRDTs have the highest average shipment costs ($8,509.33), while MRDTs incur the lowest mean freight cost ($1,041.11).",
          "Discovered that 'SCMS from RDC' led vendor transactions with 5,404 shipments, significantly outpacing other suppliers."
        ],
        techStack: [
          "Python",
          "JupyterLab",
          "Scipy",
          "Seaborn",
          "Matplotlib",
          "pandas",
          "numpy",
          "Scikit-Learn"
        ],
        additionalDetails: [
          "Analyzed over 10,000 entries of HIV orders from the USAID data portal using Python (Scipy, Scikit-Learn, Numpy, Matplotlib, and Seaborn) to identify cost drivers of pharmaceutical drugs across the world.",
          "Devised an optimized solution to reduce shipment costs by 2% and increase transport speed efficiency by 1.5%.",
          "Built interactive dashboards to visualize key cost components, allowing stakeholders to make data-driven decisions on shipment strategies."
        ],
        link: "https://github.com/akk1011/supply_chain_scripting"
      },

      {
        title: "Energy Consumption Forecasting",
        period: "September 2023 - January 2024",
        description: "Developed predictive models to analyze and forecast energy consumption patterns across South Carolina",
        keyFeatures: [
          "Advanced ML model implementation (XGBoost, Gradient Boost, Linear Regression)",
          "Interactive Shiny dashboard for real-time analytics",
          "Temperature impact analysis on energy consumption"
        ],
        projectSuccess: [
          "Achieved 91.9% accuracy in energy consumption prediction using XGBoost",
          "Identified 28% potential energy reduction through solar panel implementation",
          "Analyzed impact of 5°C temperature rise showing 30% consumption increase"
        ],
        techStack: [
          "R",
          "XGBoost", 
          "Shiny",
          "ggplot2",
          "tidyverse",
          "Gradient Boost",
          "Dimensionality Reduction"
        ],
        additionalDetails: [
          "Processed and analyzed dataset with 130k rows across 102 variables, implementing extensive data cleaning and feature selection",
          "Developed ML pipeline comparing Linear Regression (69% accuracy), Gradient Boost (90% accuracy), and XGBoost (91.9% accuracy)",
          "Created interactive Shiny app with three tabs showcasing energy predictions, feature correlations, and county-wise consumption patterns",
          "Implemented comprehensive feature engineering reducing dimensionality from 171 to 93 variables while maintaining predictive power",
          "Conducted thorough analysis of temperature impact on energy consumption, revealing critical insights for future planning"
        ],
        link: "https://github.com/akk1011/forecasting_ids"
      }
      


    ],

    
  
    education: {
      degrees: [
        {
          school: "Syracuse University",
          degree: "Master of Science in Applied Data Science",
          location: "Syracuse, NY, USA",
          period: "August 2023 - May 2025"
        },
        {
          school: "Bharathiar University",
          degree: "Bachelor of Science in Visual Communication and Electronic Media",
          location: "Coimbatore, TN, India",
          period: "June 2016 - May 2019"
        }
      ]
    }
  };