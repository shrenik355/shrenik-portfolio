export type ProjectDetail = {
  overview: string;
  problem: string;
  solution: string;
  architecture?: string[];
  keyFeatures: string[];
  challenges: string[];
  results: string[];
  futureImprovements: string[];
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  greenassetiq: {
    overview:
      "GreenAssetIQ is an enterprise-grade asset identification platform built to automate how organizations catalog IT hardware — laptops, desktops, monitors, and networking equipment — directly from photos, replacing manual data entry with a hybrid AI pipeline.",
    problem:
      "Enterprise IT teams and asset-recovery vendors process large volumes of hardware that need to be logged with manufacturer, model, serial number, and asset tag. Manual entry is slow, inconsistent across staff, and error-prone — especially with damaged, glare-heavy, or partially obscured labels.",
    solution:
      "The platform runs each image through parallel barcode decoding and OCR, layers in Azure AI Vision for visual device recognition, and falls back to GPT-4 for ambiguous or conflicting cases. A confidence-scoring stage decides automatically whether a result is trustworthy enough to store or needs a heuristic re-check, keeping the expensive LLM calls reserved for genuinely uncertain cases rather than every image.",
    architecture: [
      "image upload → Node.js/Express API → Azure Blob Storage",
      "parallel: barcode decoding + OCR (Azure AI Vision)",
      "heuristic extraction → field-level candidate values",
      "confidence scoring → low-confidence cases escalate to GPT-4",
      "PostgreSQL persistence + Redis-backed job queue + Socket.IO live status",
    ],
    keyFeatures: [
      "Hybrid extraction combining barcode decoding, OCR, computer vision, and LLM reasoning",
      "Confidence-guided routing that limits GPT-4 calls to ambiguous cases",
      "Real-time processing status over Socket.IO",
      "Structured, auditable output for downstream enterprise asset-management systems",
    ],
    challenges: [
      "Balancing OCR/vision accuracy against processing cost and latency at real enterprise scan volumes",
      "Handling inconsistent label formats, glare, and physical damage across manufacturers",
      "Designing a confidence threshold that avoids both false positives and unnecessary LLM escalation",
    ],
    results: [
      "500+ assets processed per hour in current deployment",
      "95% scan accuracy across supported asset categories",
      "Deployed as an active enterprise platform in production use",
    ],
    futureImprovements: [
      "Expand supported asset categories and identifier formats",
      "Add closed-loop feedback from manual corrections into the confidence model",
      "Multi-tenant configuration for organization-specific identifier rules",
    ],
  },

  autoguard: {
    overview:
      "AutoGuardML is a personalized vehicle recommendation engine that ranks vehicles for a buyer based on budget, total cost of ownership, safety, and emissions — rather than price alone.",
    problem:
      "Car buyers face fragmented, hard-to-compare data across safety ratings, fuel economy, emissions, and true ownership cost, making it difficult to weigh trade-offs objectively.",
    solution:
      "The system ingests vehicle data from multiple government data sources, engineers a reduced feature set from a large raw attribute space, and combines classification models with a multi-criteria decision-making layer to produce a ranked, explainable recommendation per buyer profile.",
    architecture: [
      "raw vehicle attributes → feature selection → reduced feature set",
      "classification models (Scikit-Learn) → candidate scoring",
      "multi-criteria decision layer → weighted ranking by buyer priorities",
      "Flask API → recommendation output",
    ],
    keyFeatures: [
      "Multi-criteria ranking across cost, safety, and emissions — not just price",
      "Content-based filtering personalized to buyer preferences",
      "Integration across multiple public vehicle-data sources",
    ],
    challenges: [
      "Reconciling inconsistent schemas across multiple external data sources",
      "Selecting a feature set that generalizes across vehicle classes",
      "Designing scoring weights that stay interpretable rather than a opaque black box",
    ],
    results: ["Functional end-to-end ML recommendation engine validated on the full vehicle dataset"],
    futureImprovements: [
      "Add a user-facing web interface for interactive filtering",
      "Incorporate real-time pricing and inventory data",
      "Expand buyer-persona coverage with additional preference dimensions",
    ],
  },

  airbnb: {
    overview:
      "An investment-focused analysis of the Airbnb short-term rental market, built to identify which markets offer the strongest real-estate investment opportunity based on listing performance data.",
    problem:
      "Real-estate investors evaluating short-term rental markets lack an easy way to compare profitability signals across cities using consistent, data-driven criteria.",
    solution:
      "Over 123,000 Airbnb listings were cleaned and analyzed in Python, with SQL used for aggregation across markets and Tableau used to visualize investment-relevant metrics like pricing, occupancy signals, and market saturation.",
    keyFeatures: [
      "Large-scale listing dataset (123K+) processed and cleaned end-to-end",
      "SQL-driven market aggregation and comparison",
      "Interactive Tableau dashboards for investment exploration",
    ],
    challenges: [
      "Cleaning inconsistent and incomplete listing data at scale",
      "Choosing profitability proxies that are fair across very different markets",
    ],
    results: ["Identified and ranked the most profitable markets across the analyzed dataset"],
    futureImprovements: [
      "Add a predictive pricing model on top of the descriptive analysis",
      "Extend coverage to additional countries and seasonal trends",
    ],
  },

  morth: {
    overview:
      "A business dashboard and relational database system for a landscaping company, built to replace manual KPI tracking with an automated, queryable reporting system.",
    problem:
      "The business tracked jobs, revenue, and performance KPIs manually, making reporting slow and error-prone with no single source of truth.",
    solution:
      "A normalized MySQL relational schema models the business's core entities, with a Node.js/Express service layer exposing the data and automating recurring KPI calculations for reporting.",
    architecture: [
      "MySQL relational schema → core business entities",
      "Node.js/Express service layer → REST endpoints",
      "automated KPI aggregation → dashboard-ready reporting data",
    ],
    keyFeatures: [
      "Normalized relational data model tailored to the business's operations",
      "Automated KPI reporting replacing manual spreadsheet tracking",
      "REST API layer for dashboard consumption",
    ],
    challenges: [
      "Designing a schema flexible enough for the business's actual (non-standard) workflows",
      "Automating KPI definitions that matched how the business already thought about performance",
    ],
    results: ["Replaced manual KPI tracking with an automated, queryable reporting system"],
    futureImprovements: [
      "Add a front-end dashboard UI on top of the existing API layer",
      "Add role-based access for multiple staff members",
    ],
  },

  "customer-segmentation": {
    overview:
      "A customer analytics project combining unsupervised clustering with supervised prediction to help a subscription business understand its customer base and forecast conversion likelihood.",
    problem:
      "Subscription businesses often treat their customer base as homogeneous, missing opportunities to target retention and conversion efforts by actual behavioral segment.",
    solution:
      "Customers were grouped into behavioral segments using clustering algorithms, then a supervised classification model was trained to predict subscription likelihood per customer, informed by their segment membership.",
    keyFeatures: [
      "Unsupervised clustering to surface natural customer segments",
      "Supervised classification for subscription-likelihood prediction",
      "Feature engineering across behavioral and demographic signals",
    ],
    challenges: [
      "Selecting a cluster count that was both statistically sound and business-interpretable",
      "Avoiding leakage between the clustering and prediction stages",
    ],
    results: ["85% accuracy on subscription-likelihood prediction"],
    futureImprovements: [
      "Test additional clustering algorithms for segment stability",
      "Deploy as a scoring service for live customer data",
    ],
  },

  nvidia: {
    overview:
      "A time-series forecasting project comparing ARIMA, SARIMA, and Prophet to forecast NVIDIA stock prices using historical market data.",

    problem:
      "Stock-price forecasting requires selecting among fundamentally different time-series approaches, each with different assumptions about trend, seasonality, and volatility.",

    solution:
      "Historical NVIDIA trading data across 1,835 trading days was used to fit and evaluate ARIMA, SARIMA, and Prophet models side by side, comparing forecasting behavior and error characteristics.",

    keyFeatures: [
      "Side-by-side comparison of three forecasting approaches",
      "Historical evaluation across 1,835 trading days",
      "Visualization of forecast accuracy and error using Matplotlib",
    ],

    challenges: [
      "Modeling high-volatility financial data where classical time-series assumptions are frequently violated",
      "Fairly comparing models with different underlying assumptions, including ARIMA, SARIMA, and Prophet",
    ],

  results: [
    "Comparative forecasting evaluation across all three models using real historical NVIDIA data",
  ],

  futureImprovements: [
    "Incorporate exogenous variables such as news sentiment and broader market indices",
    "Test deep-learning sequence models such as LSTM and Transformer architectures as additional comparison points",
  ],
},
  sentiment: {
    overview:
      "A sentiment-classification project comparing classical machine learning approaches against a transformer-based model to evaluate accuracy and practicality trade-offs.",
    problem:
      "Teams choosing a sentiment-analysis approach need a clear picture of how much accuracy a transformer model like BERT actually buys over cheaper classical baselines.",
    solution:
      "Logistic Regression and Naive Bayes baselines were trained and evaluated against a fine-tuned BERT transformer model (via HuggingFace Transformers) on the same review dataset, comparing accuracy and behavior directly.",
    keyFeatures: [
      "Direct comparison of classical ML vs. transformer-based NLP",
      "Evaluation across ~10,000 reviews",
      "Shared preprocessing and evaluation pipeline for a fair comparison",
    ],
    challenges: [
      "Ensuring a fair, consistent evaluation pipeline across models with very different input requirements",
      "Balancing BERT's accuracy gains against its higher compute and latency cost",
    ],
    results: ["Comparative accuracy results across Logistic Regression, Naive Bayes, and BERT on ~10K reviews"],
    futureImprovements: [
      "Test additional transformer variants (RoBERTa, DistilBERT) for a latency/accuracy trade-off study",
      "Deploy the best-performing model behind a simple inference API",
    ],
  },
};
