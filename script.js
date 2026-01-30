// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality for project and experience details
function openProjectModal(projectId) {
    const modal = document.getElementById('detailsModal');
    const modalContent = document.getElementById('modalContent');
    
    // Project data
    const projectData = {
        'sleep-forecast': {
            title: 'Forecasting Infants\' Sleep and Awake Schedules',
            company: 'TrendPlus Company',
            date: 'September 2024',
            image: 'placeholder-sleep.jpg',
            description: `
                <p>This project focused on developing and deploying a sophisticated multitask LSTM-based model to analyze mobile app-logged sleep data for infants. The goal was to create a system that could accurately forecast sleep patterns and identify anomalies that might indicate sleep disorders or irregularities.</p>
                
                <h4>Key Objectives:</h4>
                <ul>
                    <li>Analyze historical sleep data logged through mobile applications</li>
                    <li>Develop accurate forecasting models for infant sleep patterns</li>
                    <li>Identify anomalies and irregular sleep behaviors</li>
                    <li>Support healthcare professionals and parents in monitoring infant sleep health</li>
                </ul>
                
                <h4>Technical Approach:</h4>
                <p>The project utilized a multitask learning architecture based on Long Short-Term Memory (LSTM) networks, which are particularly well-suited for time-series data. The model was trained to simultaneously predict multiple aspects of infant sleep:</p>
                <ul>
                    <li>Sleep onset and wake times</li>
                    <li>Sleep duration and quality metrics</li>
                    <li>Sleep cycle patterns</li>
                    <li>Anomaly detection for irregular patterns</li>
                </ul>
                
                <h4>Data Processing:</h4>
                <p>Extensive preprocessing was performed on the mobile app data, including:</p>
                <ul>
                    <li>Handling missing values and irregular sampling rates</li>
                    <li>Feature engineering from raw sleep logs</li>
                    <li>Temporal alignment and normalization</li>
                    <li>Data augmentation techniques to improve model robustness</li>
                </ul>
                
                <h4>Results & Impact:</h4>
                <p>The model achieved high accuracy in forecasting infant sleep patterns, providing valuable insights for both healthcare applications and parenting support. The anomaly detection component successfully identified irregular sleep patterns that could indicate potential health concerns, enabling early intervention.</p>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">TensorFlow</span>
                    <span class="tag">Keras</span>
                    <span class="tag">LSTM</span>
                    <span class="tag">Time Series Analysis</span>
                    <span class="tag">Multitask Learning</span>
                    <span class="tag">Pandas</span>
                    <span class="tag">NumPy</span>
                </div>
            `,
            tags: ['LSTM', 'Time Series', 'Healthcare', 'Multitask Learning', 'Data Preprocessing']
        },
        'alzheimer': {
            title: 'Diagnosis of Alzheimer\'s from MRI Images',
            company: 'Amirkabir University of Technology',
            date: 'February 2023',
            image: 'placeholder-alzheimer.jpg',
            description: `
                <p>This research project developed an innovative framework for diagnosing Alzheimer's disease and identifying individuals at risk using advanced graph-based analysis of 3D MRI brain images. The approach combined geometric flow methods with graph neural networks to achieve accurate classification of disease stages.</p>
                
                <h4>Research Objectives:</h4>
                <ul>
                    <li>Develop a novel approach to Alzheimer's diagnosis from MRI scans</li>
                    <li>Classify patients into healthy, prodromal, and diseased categories</li>
                    <li>Model the temporal lobe structure using graph representations</li>
                    <li>Leverage geometric properties for improved classification accuracy</li>
                </ul>
                
                <h4>Methodology:</h4>
                <p>The framework employed Ricci Flow, a geometric technique from differential geometry, to analyze the curvature and structural properties of brain regions. This was combined with graph-based analysis to create a comprehensive model:</p>
                <ul>
                    <li><strong>Ricci Flow Analysis:</strong> Applied to quantify geometric changes in the temporal lobe associated with Alzheimer's progression</li>
                    <li><strong>Graph Construction:</strong> Brain regions were represented as nodes, with edges representing anatomical or functional connections</li>
                    <li><strong>Graph Neural Networks:</strong> Utilized GNN, GCN, and GAT architectures to learn from graph representations</li>
                </ul>
                
                <h4>Technical Implementation:</h4>
                <p>The project involved several sophisticated technical components:</p>
                <ul>
                    <li>3D MRI image preprocessing and segmentation</li>
                    <li>Temporal lobe extraction and modeling</li>
                    <li>Ricci Flow computation for geometric feature extraction</li>
                    <li>Graph construction from anatomical structures</li>
                    <li>Implementation of multiple GNN architectures for comparison</li>
                </ul>
                
                <h4>Graph Neural Network Architectures:</h4>
                <ul>
                    <li><strong>GNN (Graph Neural Networks):</strong> Base architecture for learning on graph-structured data</li>
                    <li><strong>GCN (Graph Convolutional Networks):</strong> Applied spectral convolutions for feature learning</li>
                    <li><strong>GAT (Graph Attention Networks):</strong> Incorporated attention mechanisms to weight important connections</li>
                </ul>
                
                <h4>Clinical Significance:</h4>
                <p>The framework's ability to classify Alzheimer's stages supports early diagnosis and intervention, which is crucial for disease management. The prodromal stage identification is particularly valuable for identifying at-risk individuals before severe symptoms develop.</p>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">PyTorch</span>
                    <span class="tag">PyTorch Geometric</span>
                    <span class="tag">GNN</span>
                    <span class="tag">GCN</span>
                    <span class="tag">GAT</span>
                    <span class="tag">Ricci Flow</span>
                    <span class="tag">3D Image Processing</span>
                    <span class="tag">Medical Imaging</span>
                </div>
            `,
            tags: ['GNN', 'GCN', 'GAT', 'Ricci Flow', 'Medical Imaging', 'Deep Learning']
        },
        'lung-segmentation': {
            title: 'Segmentation of Lung Lobes in CT-Scan Images',
            company: 'K.N. Toosi University of Technology',
            date: 'March 2019',
            image: 'placeholder-lung.jpg',
            description: `
                <p>This project focused on developing deep learning models for precise segmentation of lung lobes in CT-scan images, specifically for patients with pulmonary fibrosis. Accurate segmentation is crucial for disease assessment, treatment planning, and monitoring disease progression.</p>
                
                <h4>Project Goals:</h4>
                <ul>
                    <li>Achieve accurate segmentation of individual lung lobes</li>
                    <li>Handle the challenges of fibrotic tissue identification</li>
                    <li>Support quantitative analysis of disease extent</li>
                    <li>Provide tools for radiologists and pulmonologists</li>
                </ul>
                
                <h4>Technical Approach:</h4>
                <p>Multiple deep learning architectures were implemented and evaluated:</p>
                <ul>
                    <li><strong>U-Net:</strong> The baseline architecture known for excellent performance in medical image segmentation</li>
                    <li><strong>ResNet-based U-Net:</strong> Enhanced feature extraction using residual connections</li>
                    <li><strong>DenseNet-based U-Net:</strong> Improved feature propagation through dense connections</li>
                </ul>
                
                <h4>Dataset & Preprocessing:</h4>
                <p>The project utilized CT-scan images from fibrosis patients, requiring specialized preprocessing:</p>
                <ul>
                    <li>Hounsfield unit normalization</li>
                    <li>Slice selection and resampling</li>
                    <li>Data augmentation (rotation, scaling, elastic deformation)</li>
                    <li>Ground truth annotation verification with clinical experts</li>
                </ul>
                
                <h4>Model Architecture Details:</h4>
                <p>The U-Net variants were designed with careful consideration of the segmentation task:</p>
                <ul>
                    <li>Encoder-decoder architecture with skip connections</li>
                    <li>Multiple resolution levels for capturing both global and local features</li>
                    <li>Batch normalization and dropout for regularization</li>
                    <li>Custom loss functions combining Dice loss and cross-entropy</li>
                </ul>
                
                <h4>Challenges Addressed:</h4>
                <ul>
                    <li>Distinguishing fibrotic tissue from healthy lung tissue</li>
                    <li>Handling variable lobe sizes and shapes</li>
                    <li>Managing class imbalance between different lobes</li>
                    <li>Dealing with imaging artifacts and noise</li>
                </ul>
                
                <h4>Clinical Applications:</h4>
                <p>The segmentation results enable:</p>
                <ul>
                    <li>Quantitative assessment of fibrosis extent</li>
                    <li>Lobe-specific disease monitoring</li>
                    <li>Treatment response evaluation</li>
                    <li>Surgical planning support</li>
                </ul>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">TensorFlow</span>
                    <span class="tag">Keras</span>
                    <span class="tag">U-Net</span>
                    <span class="tag">ResNet</span>
                    <span class="tag">DenseNet</span>
                    <span class="tag">Medical Imaging</span>
                    <span class="tag">Image Segmentation</span>
                </div>
            `,
            tags: ['U-Net', 'ResNet', 'DenseNet', 'Medical Imaging', 'CT-Scan', 'Segmentation']
        },
        'mi-detection': {
            title: 'Identification of Myocardial Infarction Using Multi-Lead ECG Signals',
            company: 'K.N. Toosi University of Technology',
            date: 'May 2019',
            image: 'placeholder-ecg.jpg',
            description: `
                <p>This research project developed a deep convolutional neural network for detecting myocardial infarction (heart attacks) from multi-lead ECG signals. The system leverages the rich information present in 12-lead ECG recordings to achieve accurate and rapid detection.</p>
                
                <h4>Project Objectives:</h4>
                <ul>
                    <li>Develop an automated MI detection system from ECG signals</li>
                    <li>Utilize information from all 12 ECG leads</li>
                    <li>Achieve high sensitivity and specificity for clinical use</li>
                    <li>Support rapid diagnosis in emergency settings</li>
                </ul>
                
                <h4>Dataset:</h4>
                <p>The project used the PTB Diagnostic ECG Database v1.0.0, which contains:</p>
                <ul>
                    <li>High-quality 12-lead ECG recordings</li>
                    <li>Diverse patient demographics</li>
                    <li>Expert-annotated cardiac conditions</li>
                    <li>Both healthy controls and MI patients</li>
                </ul>
                
                <h4>Signal Processing Pipeline:</h4>
                <p>Comprehensive preprocessing was applied to the raw ECG signals:</p>
                <ul>
                    <li>Baseline wander removal using high-pass filtering</li>
                    <li>Powerline interference elimination</li>
                    <li>R-peak detection and heart rate calculation</li>
                    <li>Signal normalization and scaling</li>
                    <li>Heartbeat segmentation for consistent input size</li>
                </ul>
                
                <h4>Deep CNN Architecture:</h4>
                <p>The model was designed specifically for multi-lead ECG analysis:</p>
                <ul>
                    <li>Convolutional layers for automatic feature extraction</li>
                    <li>Parallel processing of different ECG leads</li>
                    <li>Feature fusion from multiple leads</li>
                    <li>Fully connected layers for classification</li>
                    <li>Dropout and batch normalization for regularization</li>
                </ul>
                
                <h4>Key Features:</h4>
                <ul>
                    <li><strong>Multi-Lead Integration:</strong> Combines information from all 12 leads for comprehensive analysis</li>
                    <li><strong>End-to-End Learning:</strong> Automatically learns relevant features without manual feature engineering</li>
                    <li><strong>Real-time Capability:</strong> Fast inference for clinical deployment</li>
                    <li><strong>Interpretability:</strong> Activation mapping to understand model decisions</li>
                </ul>
                
                <h4>Clinical Relevance:</h4>
                <p>Myocardial infarction detection is time-critical, and this system provides:</p>
                <ul>
                    <li>Rapid initial screening in emergency departments</li>
                    <li>Support for healthcare providers in resource-limited settings</li>
                    <li>Reduced time to treatment initiation</li>
                    <li>Consistent analysis reducing human error</li>
                </ul>
                
                <h4>Model Evaluation:</h4>
                <p>The model was evaluated using standard metrics for medical diagnostics:</p>
                <ul>
                    <li>Sensitivity (True Positive Rate)</li>
                    <li>Specificity (True Negative Rate)</li>
                    <li>Precision and Recall</li>
                    <li>F1-Score</li>
                    <li>ROC-AUC analysis</li>
                </ul>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">TensorFlow</span>
                    <span class="tag">Keras</span>
                    <span class="tag">CNN</span>
                    <span class="tag">Signal Processing</span>
                    <span class="tag">ECG Analysis</span>
                    <span class="tag">SciPy</span>
                    <span class="tag">Biosppy</span>
                </div>
            `,
            tags: ['CNN', 'ECG', 'Signal Processing', 'Medical Diagnosis', 'Deep Learning']
        },
        'ensemble-forecasting': {
            title: 'Ensemble Forecasting Model for Network Anomaly Detection',
            company: 'TrendPlus',
            date: '2023 - Present',
            image: 'placeholder-ensemble.jpg',
            description: `
                <p>This production-level project developed a sophisticated ensemble forecasting model for telecommunications network monitoring and anomaly detection. The system integrates multiple state-of-the-art forecasting algorithms to achieve exceptional accuracy in predicting network metrics and identifying anomalies.</p>
                
                <h4>Business Context:</h4>
                <p>Telecommunications networks generate massive amounts of time-series data from various performance metrics. Detecting anomalies quickly is crucial for:</p>
                <ul>
                    <li>Preventing service disruptions</li>
                    <li>Maintaining quality of service (QoS)</li>
                    <li>Optimizing network capacity</li>
                    <li>Reducing operational costs</li>
                </ul>
                
                <h4>Technical Architecture:</h4>
                <p>The ensemble model combines two powerful forecasting methods:</p>
                <ul>
                    <li><strong>Facebook Prophet:</strong> Handles seasonality, trends, and holidays effectively</li>
                    <li><strong>DeepAR:</strong> Probabilistic forecasting using deep learning for uncertainty quantification</li>
                </ul>
                
                <h4>Model Integration Strategy:</h4>
                <p>The ensemble approach was designed to leverage the strengths of both models:</p>
                <ul>
                    <li>Prophet excels at capturing complex seasonal patterns</li>
                    <li>DeepAR provides probabilistic bounds and handles irregularities</li>
                    <li>Weighted averaging based on historical performance</li>
                    <li>Dynamic weight adjustment using validation metrics</li>
                </ul>
                
                <h4>Anomaly Detection Mechanism:</h4>
                <p>The system identifies anomalies through multiple approaches:</p>
                <ul>
                    <li>Statistical deviation from predicted values</li>
                    <li>Confidence interval violations</li>
                    <li>Sudden distribution shifts</li>
                    <li>Pattern break detection</li>
                </ul>
                
                <h4>Performance Metrics:</h4>
                <p>The model achieved exceptional results:</p>
                <ul>
                    <li><strong>SMAPE < 0.2:</strong> Symmetric Mean Absolute Percentage Error under 20%</li>
                    <li>High precision in anomaly detection reducing false alarms</li>
                    <li>Real-time processing capability for streaming data</li>
                    <li>Scalable to thousands of time series</li>
                </ul>
                
                <h4>Data Processing Pipeline:</h4>
                <p>Comprehensive preprocessing ensures data quality:</p>
                <ul>
                    <li>Missing value imputation using advanced techniques</li>
                    <li>Outlier detection and handling</li>
                    <li>Seasonality decomposition</li>
                    <li>Trend extraction and detrending</li>
                    <li>Feature engineering from raw metrics</li>
                </ul>
                
                <h4>Implementation Details:</h4>
                <ul>
                    <li>Hadoop and PySpark for distributed processing</li>
                    <li>Automated retraining pipeline</li>
                    <li>Model versioning and A/B testing framework</li>
                    <li>Real-time dashboard for monitoring predictions</li>
                    <li>Alert system for detected anomalies</li>
                </ul>
                
                <h4>Business Impact:</h4>
                <ul>
                    <li>70% reduction in manual data quality analysis</li>
                    <li>Proactive issue detection before customer impact</li>
                    <li>Improved network reliability and uptime</li>
                    <li>Cost savings through optimized resource allocation</li>
                </ul>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Facebook Prophet</span>
                    <span class="tag">DeepAR</span>
                    <span class="tag">GluonTS</span>
                    <span class="tag">PySpark</span>
                    <span class="tag">Hadoop</span>
                    <span class="tag">Pandas</span>
                    <span class="tag">NumPy</span>
                    <span class="tag">Scikit-learn</span>
                </div>
            `,
            tags: ['Prophet', 'DeepAR', 'Time Series', 'Anomaly Detection', 'Ensemble Learning']
        },
        'rag-pipeline': {
            title: 'RAG Pipeline for Transport Systems',
            company: 'TrendPlus',
            date: '2024',
            image: 'placeholder-rag.jpg',
            description: `
                <p>This cutting-edge project developed a Retrieval-Augmented Generation (RAG) pipeline for intelligent transport inquiry and incident resolution systems. The solution integrates multiple large language models to provide context-aware, accurate responses for logistics and transport operations.</p>
                
                <h4>System Overview:</h4>
                <p>The RAG pipeline serves as an intelligent assistant for transport operations, handling:</p>
                <ul>
                    <li>Customer inquiries about shipments and routes</li>
                    <li>Incident reporting and resolution guidance</li>
                    <li>Real-time status updates and tracking</li>
                    <li>Automated scheduling and route optimization</li>
                </ul>
                
                <h4>RAG Architecture:</h4>
                <p>The system implements a sophisticated retrieval-augmented approach:</p>
                <ul>
                    <li><strong>Retrieval Component:</strong> Vector database for storing and retrieving relevant transport documents</li>
                    <li><strong>Generation Component:</strong> Multiple LLM integration for response generation</li>
                    <li><strong>Context Management:</strong> Intelligent selection and ranking of retrieved information</li>
                </ul>
                
                <h4>Multi-Model Integration:</h4>
                <p>The pipeline leverages multiple state-of-the-art language models:</p>
                <ul>
                    <li><strong>LLaMA:</strong> Open-source foundation model for general understanding</li>
                    <li><strong>ChatGPT:</strong> GPT-based models for conversational interactions</li>
                    <li><strong>DeepSeek:</strong> Specialized models for technical and analytical queries</li>
                </ul>
                
                <h4>Model Selection Strategy:</h4>
                <p>Dynamic model routing based on query characteristics:</p>
                <ul>
                    <li>Query complexity analysis</li>
                    <li>Domain-specific routing rules</li>
                    <li>Performance-based selection</li>
                    <li>Cost optimization considerations</li>
                </ul>
                
                <h4>Prompt Engineering:</h4>
                <p>Implemented advanced prompt-based service detection using Granite language models and LangChain:</p>
                <ul>
                    <li>User intent classification</li>
                    <li>Entity extraction from natural language</li>
                    <li>Action mapping to backend functions</li>
                    <li>Context-aware prompt templates</li>
                </ul>
                
                <h4>Backend Integration:</h4>
                <p>Architected core backend for action-based logistics chatbot using FastAPI:</p>
                <ul>
                    <li>Real-time API endpoints for transport operations</li>
                    <li>WebSocket support for live updates</li>
                    <li>Integration with transport management systems</li>
                    <li>Authentication and authorization layers</li>
                </ul>
                
                <h4>Knowledge Base Management:</h4>
                <ul>
                    <li>Document processing pipeline for transport policies and procedures</li>
                    <li>Automatic indexing and embedding generation</li>
                    <li>Version control for knowledge base updates</li>
                    <li>Quality assurance for retrieved information</li>
                </ul>
                
                <h4>Context-Aware Response Generation:</h4>
                <p>The system ensures high-accuracy responses through:</p>
                <ul>
                    <li>Semantic search over transport documentation</li>
                    <li>Relevance scoring and re-ranking</li>
                    <li>Source citation and verification</li>
                    <li>Confidence scoring for generated responses</li>
                </ul>
                
                <h4>Use Cases:</h4>
                <ul>
                    <li><strong>Transport Inquiries:</strong> Automated responses to shipment status, delivery times, and route information</li>
                    <li><strong>Incident Resolution:</strong> Guided troubleshooting for common transport issues</li>
                    <li><strong>Dynamic Scheduling:</strong> Intelligent scheduling suggestions based on constraints</li>
                    <li><strong>Support Workflows:</strong> Automated ticket creation and routing</li>
                </ul>
                
                <h4>Performance Optimization:</h4>
                <ul>
                    <li>Caching layer for frequent queries</li>
                    <li>Async processing for improved response times</li>
                    <li>Load balancing across model instances</li>
                    <li>Response streaming for better user experience</li>
                </ul>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">LangChain</span>
                    <span class="tag">LLaMA</span>
                    <span class="tag">ChatGPT</span>
                    <span class="tag">DeepSeek</span>
                    <span class="tag">FastAPI</span>
                    <span class="tag">Vector Databases</span>
                    <span class="tag">Granite</span>
                    <span class="tag">RAG</span>
                    <span class="tag">NLP</span>
                </div>
            `,
            tags: ['LLaMA', 'ChatGPT', 'DeepSeek', 'RAG', 'LangChain', 'FastAPI']
        },
        'fault-detection': {
            title: 'Mobile Network Fault Detection System',
            company: 'Clarity Global',
            date: '2020 - 2023',
            image: 'placeholder-network.jpg',
            description: `
                <p>This comprehensive project developed advanced machine learning systems for detecting and classifying faults in mobile telecommunications networks. The solution combines deep learning and traditional ML approaches to achieve high accuracy in identifying network issues.</p>
                
                <h4>Business Challenge:</h4>
                <p>Mobile networks face various fault types that can impact service quality:</p>
                <ul>
                    <li>Service Degradation (SD) faults</li>
                    <li>Complete Dropout (CD) faults</li>
                    <li>Intermittent connectivity issues</li>
                    <li>Capacity and congestion problems</li>
                </ul>
                
                <h4>Solution Architecture:</h4>
                <p>Developed a two-stage detection system with complementary approaches:</p>
                <ul>
                    <li><strong>Stage 1:</strong> XGBoost-based classifier (68% F1-score)</li>
                    <li><strong>Stage 2:</strong> Deep Embedding Clustering method (72% F1-score)</li>
                </ul>
                
                <h4>Multitask Learning Approach:</h4>
                <p>Created a deep network with multitask learning to detect multiple fault types simultaneously:</p>
                <ul>
                    <li>Shared representation learning across fault types</li>
                    <li>Task-specific output heads for SD and CD detection</li>
                    <li>Achieved 87% F1-score through joint optimization</li>
                    <li>Improved generalization through multi-objective training</li>
                </ul>
                
                <h4>Stage 1: XGBoost Classifier</h4>
                <p>The first stage uses gradient boosting for rapid initial classification:</p>
                <ul>
                    <li>Feature engineering from network KPIs</li>
                    <li>Time-window aggregations</li>
                    <li>Statistical features (mean, std, percentiles)</li>
                    <li>Change point detection features</li>
                    <li>Hyperparameter optimization using Bayesian methods</li>
                </ul>
                
                <h4>Stage 2: Deep Embedding Clustering</h4>
                <p>The second stage refines predictions using deep learning:</p>
                <ul>
                    <li>Autoencoder for dimensionality reduction</li>
                    <li>Learned embeddings capture complex patterns</li>
                    <li>Clustering in latent space</li>
                    <li>Joint optimization of reconstruction and clustering</li>
                </ul>
                
                <h4>Feature Engineering:</h4>
                <p>Comprehensive feature extraction from network data:</p>
                <ul>
                    <li>Key Performance Indicators (KPIs) from network elements</li>
                    <li>Temporal features (hour, day, week patterns)</li>
                    <li>Rolling statistics over multiple time windows</li>
                    <li>Alarm correlation features</li>
                    <li>Traffic pattern indicators</li>
                    <li>Historical fault occurrence rates</li>
                </ul>
                
                <h4>Data Challenges:</h4>
                <p>Addressed several data-related challenges:</p>
                <ul>
                    <li>Class imbalance (more normal data than faults)</li>
                    <li>Missing values in network logs</li>
                    <li>Temporal dependencies in fault occurrence</li>
                    <li>High dimensionality of network metrics</li>
                </ul>
                
                <h4>Model Training & Validation:</h4>
                <ul>
                    <li>Time-series cross-validation to prevent data leakage</li>
                    <li>Custom loss functions for imbalanced data</li>
                    <li>Ensemble of models for robustness</li>
                    <li>Threshold optimization for precision-recall tradeoff</li>
                </ul>
                
                <h4>Deployment & Operations:</h4>
                <p>The system was deployed in production with:</p>
                <ul>
                    <li>Real-time inference on streaming network data</li>
                    <li>Alert generation for detected faults</li>
                    <li>Dashboard for network operations center</li>
                    <li>Automated model retraining pipeline</li>
                    <li>A/B testing framework for model improvements</li>
                </ul>
                
                <h4>Impact & Results:</h4>
                <ul>
                    <li>Reduced mean time to detect (MTTD) by 40%</li>
                    <li>Decreased false positive rate compared to rule-based systems</li>
                    <li>Enabled proactive maintenance and issue resolution</li>
                    <li>Improved overall network quality and customer satisfaction</li>
                </ul>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">XGBoost</span>
                    <span class="tag">TensorFlow</span>
                    <span class="tag">Keras</span>
                    <span class="tag">Deep Learning</span>
                    <span class="tag">Clustering</span>
                    <span class="tag">Scikit-learn</span>
                    <span class="tag">Pandas</span>
                    <span class="tag">Feature Engineering</span>
                </div>
            `,
            tags: ['Deep Learning', 'XGBoost', 'Clustering', 'Fault Detection', 'Telecommunications']
        }
    };
    
    const experienceData = {
        'trendplus': {
            title: 'Data Scientist - TrendPlus',
            period: 'Sep 2023 - Present',
            location: 'Stockholm, Sweden (Remote)',
            image: 'placeholder-trendplus.jpg',
            description: `
                <p>At TrendPlus, I work on developing advanced data science and machine learning solutions for logistics, telecommunications, and healthcare applications. My role encompasses the full ML lifecycle from research and development to deployment and monitoring of production systems.</p>
                
                <h4>Key Responsibilities:</h4>
                <ul>
                    <li>Architecting and implementing end-to-end ML pipelines for time-series forecasting and anomaly detection</li>
                    <li>Developing RAG-based chatbot systems using LLaMA, ChatGPT, and DeepSeek models</li>
                    <li>Building backend services with FastAPI for ML model deployment</li>
                    <li>Conducting research on AIOps and network optimization</li>
                    <li>Collaborating with stakeholders to translate business requirements into technical solutions</li>
                </ul>
                
                <h4>Major Projects & Achievements:</h4>
                
                <h5>1. Ensemble Forecasting for Network Anomaly Detection</h5>
                <ul>
                    <li>Developed ensemble model combining Facebook Prophet and DeepAR</li>
                    <li>Achieved SMAPE < 0.2, significantly outperforming baseline models</li>
                    <li>Implemented automated data quality analysis, reducing manual workload by 70%</li>
                    <li>Built time series preprocessing pipeline using Hadoop and PySpark for scalability</li>
                </ul>
                
                <h5>2. Route Demand Forecasting System</h5>
                <ul>
                    <li>Designed forecasting system using MSTL, SARIMA, and Prophet for logistics optimization</li>
                    <li>Created customer-facing dashboard for real-time visualization and decision support</li>
                    <li>Enabled proactive route planning, reducing operational costs</li>
                    <li>Implemented automated retraining pipeline for model updates</li>
                </ul>
                
                <h5>3. RAG-Powered Transport Chatbot</h5>
                <ul>
                    <li>Architected core backend using FastAPI for action-based logistics chatbot</li>
                    <li>Integrated LLaMA, ChatGPT, and DeepSeek models for context-aware responses</li>
                    <li>Implemented prompt-based service detection using Granite and LangChain</li>
                    <li>Built retrieval system for transport documentation and policies</li>
                </ul>
                
                <h5>4. Alarms Correlation Discovery</h5>
                <ul>
                    <li>Designed system for telecommunications network alarm correlation</li>
                    <li>Applied graph analysis and simplified FP-Growth algorithm</li>
                    <li>Identified patterns in network alarms for root cause analysis</li>
                    <li>Reduced alarm noise and improved incident response times</li>
                </ul>
                
                <h5>5. SS7 Network Security</h5>
                <ul>
                    <li>Developed PoC for detecting malicious Global Titles in SS7 networks</li>
                    <li>Used RandomForest and SHAP analysis for interpretable predictions</li>
                    <li>Enhanced network security through anomaly detection</li>
                </ul>
                
                <h5>6. Infants' Sleep Forecasting</h5>
                <ul>
                    <li>Developed multitask LSTM model for analyzing mobile app-logged sleep data</li>
                    <li>Achieved high accuracy in forecasting sleep patterns</li>
                    <li>Implemented anomaly detection for irregular sleep behaviors</li>
                    <li>Supported healthcare and parenting applications</li>
                </ul>
                
                <h4>Technical Skills Applied:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Time Series Forecasting</span>
                    <span class="tag">Prophet</span>
                    <span class="tag">DeepAR</span>
                    <span class="tag">LLM Integration</span>
                    <span class="tag">RAG</span>
                    <span class="tag">FastAPI</span>
                    <span class="tag">PySpark</span>
                    <span class="tag">Hadoop</span>
                    <span class="tag">Graph Analysis</span>
                    <span class="tag">SHAP</span>
                    <span class="tag">RandomForest</span>
                </div>
            `,
            tags: ['Time Series', 'RAG', 'LLM', 'FastAPI', 'Anomaly Detection']
        },
        'clarity': {
            title: 'Data Scientist & ML Researcher - Clarity Global',
            period: 'May 2020 - Jun 2023',
            location: 'Tehran, Iran',
            image: 'placeholder-clarity.jpg',
            description: `
                <p>At Clarity Global, I led multiple machine learning research and development initiatives focused on telecommunications network optimization and fault detection. My work combined academic rigor with practical implementation to solve real-world network operations challenges.</p>
                
                <h4>Key Responsibilities:</h4>
                <ul>
                    <li>Researching and implementing ML solutions for mobile network fault detection</li>
                    <li>Conducting extensive research on 5G, OSS, and AI integration</li>
                    <li>Exploring AIOps use cases and staying ahead of industry trends</li>
                    <li>Delivering insights to decision-makers for strategic planning</li>
                    <li>Collaborating with network engineers to understand operational challenges</li>
                </ul>
                
                <h4>Major Projects & Achievements:</h4>
                
                <h5>1. Mobile Network Fault Detection with Multitask Learning</h5>
                <ul>
                    <li>Developed deep network with multitask learning approach</li>
                    <li>Detected SD (Service Degradation) and CD (Complete Dropout) faults</li>
                    <li>Achieved 87% F1-score through joint optimization</li>
                    <li>Improved upon single-task models through shared representations</li>
                </ul>
                
                <h5>2. Two-Stage Fault Detection System</h5>
                <ul>
                    <li>Implemented hybrid approach combining XGBoost and Deep Embedding Clustering</li>
                    <li>Stage 1 (XGBoost): Achieved 68% F1-score for rapid classification</li>
                    <li>Stage 2 (Deep Clustering): Achieved 72% F1-score through refinement</li>
                    <li>Balanced accuracy with computational efficiency</li>
                </ul>
                
                <h5>3. 5G and AIOps Research</h5>
                <ul>
                    <li>Conducted comprehensive research on 5G network architectures</li>
                    <li>Explored AI integration in Operations Support Systems (OSS)</li>
                    <li>Identified promising AIOps use cases for network automation</li>
                    <li>Presented findings to technical leadership and stakeholders</li>
                </ul>
                
                <h5>4. Technical Knowledge Management</h5>
                <ul>
                    <li>Maintained awareness of latest research in network AI</li>
                    <li>Reviewed technical papers, white papers, and industry best practices</li>
                    <li>Contributed to knowledge base for the data science team</li>
                    <li>Mentored junior team members on ML techniques</li>
                </ul>
                
                <h4>Research Contributions:</h4>
                <ul>
                    <li>Co-authored paper on supervised embedding and clustering for mobile network fault classification</li>
                    <li>Developed novel preprocessing techniques for imbalanced network data</li>
                    <li>Created reusable ML pipelines for network analytics</li>
                </ul>
                
                <h4>Impact:</h4>
                <ul>
                    <li>Reduced network downtime through early fault detection</li>
                    <li>Improved operational efficiency for network operations centers</li>
                    <li>Enabled data-driven decision making for network planning</li>
                    <li>Contributed to company's thought leadership in AIOps</li>
                </ul>
                
                <h4>Technical Skills Applied:</h4>
                <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Deep Learning</span>
                    <span class="tag">XGBoost</span>
                    <span class="tag">TensorFlow</span>
                    <span class="tag">Keras</span>
                    <span class="tag">Clustering</span>
                    <span class="tag">Feature Engineering</span>
                    <span class="tag">5G</span>
                    <span class="tag">AIOps</span>
                    <span class="tag">OSS</span>
                </div>
            `,
            tags: ['Deep Learning', 'XGBoost', 'Clustering', '5G', 'AIOps']
        },
        'hooshyar': {
            title: 'Researcher & Deep Learning Specialist - Hooshyar Communication',
            period: 'Aug 2021 - Feb 2022',
            location: 'Tehran, Iran',
            image: 'placeholder-hooshyar.jpg',
            description: `
                <p>At Hooshyar Communication Research Group, I focused on signal processing and deep learning applications for wireless communication systems. The role involved both theoretical research and practical implementation of signal classification systems.</p>
                
                <h4>Key Responsibilities:</h4>
                <ul>
                    <li>Implementing signal protocols and generating synthetic signal datasets</li>
                    <li>Developing deep learning models for signal classification</li>
                    <li>Integrating ML models into C++ applications</li>
                    <li>Designing user interfaces for real-time signal monitoring</li>
                </ul>
                
                <h4>Major Projects & Achievements:</h4>
                
                <h5>1. Signal Protocol Classification</h5>
                <ul>
                    <li>Implemented various signal protocols in MATLAB</li>
                    <li>Generated comprehensive datasets with varying Signal-to-Noise Ratios (SNR)</li>
                    <li>Extracted spectrograms and applied wavelet transforms for feature extraction</li>
                    <li>Created labeled dataset for model training and evaluation</li>
                </ul>
                
                <h5>2. Deep Segmentation Model</h5>
                <ul>
                    <li>Fine-tuned ResNet50-based segmentation architecture</li>
                    <li>Classified signal protocols from time-frequency representations</li>
                    <li>Achieved 93% global accuracy</li>
                    <li>Attained 81% Boundary F1-Score for precise protocol boundaries</li>
                    <li>Reached 87% Weighted IoU demonstrating strong segmentation quality</li>
                </ul>
                
                <h5>3. Real-Time Monitoring System</h5>
                <ul>
                    <li>Designed GUI for monitoring signals from USRP and SDR devices</li>
                    <li>Integrated deep learning model using ONNX runtime in C++</li>
                    <li>Enabled real-time signal classification with low latency</li>
                    <li>Provided visualization of signal characteristics and predictions</li>
                </ul>
                
                <h4>Technical Challenges Addressed:</h4>
                <ul>
                    <li>Handling signals with low SNR typical of real-world conditions</li>
                    <li>Optimizing model for real-time inference on resource-constrained hardware</li>
                    <li>Integrating Python-trained models into C++ production environment</li>
                    <li>Designing efficient signal processing pipeline</li>
                </ul>
                
                <h4>Signal Processing Techniques:</h4>
                <ul>
                    <li>Time-frequency analysis using spectrograms</li>
                    <li>Wavelet transform for multi-resolution analysis</li>
                    <li>Noise reduction and signal enhancement</li>
                    <li>Feature extraction from raw RF signals</li>
                </ul>
                
                <h4>Model Development:</h4>
                <ul>
                    <li>Transfer learning from ImageNet pre-trained ResNet50</li>
                    <li>Custom segmentation head for protocol classification</li>
                    <li>Data augmentation to improve model robustness</li>
                    <li>Model quantization for faster inference</li>
                    <li>ONNX conversion for cross-platform deployment</li>
                </ul>
                
                <h4>Technical Skills Applied:</h4>
                <div class="tech-tags">
                    <span class="tag">MATLAB</span>
                    <span class="tag">Python</span>
                    <span class="tag">C++</span>
                    <span class="tag">ResNet50</span>
                    <span class="tag">Signal Processing</span>
                    <span class="tag">Deep Learning</span>
                    <span class="tag">ONNX</span>
                    <span class="tag">Wavelet Transform</span>
                    <span class="tag">USRP</span>
                    <span class="tag">SDR</span>
                </div>
            `,
            tags: ['Signal Processing', 'ResNet50', 'MATLAB', 'C++', 'ONNX']
        }
    };
    
    const data = projectData[projectId] || experienceData[projectId];
    
    if (data) {
        modalContent.innerHTML = `
            <h2>${data.title}</h2>
            <div class="modal-meta">
                <span class="modal-company">${data.company || data.location}</span>
                <span class="modal-date">${data.date || data.period}</span>
            </div>
            ${data.description}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function openExperienceModal(experienceId) {
    openProjectModal(experienceId);
}

function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.experience-card, .project-card, .timeline-item, .teaching-card, .publication-card, .project-showcase-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
