"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { X, Github } from "lucide-react";

const projects = [
    {
        title: "Parameter-Efficient Automotive Damage Detection via Deformable Spatial Adapters",
        tagline: "Bridging rigid foundation model features to irregular dent geometry using DCNv4 adapters.",
        description: "Developed a novel object detection pipeline for automotive dent detection on the CarDD dataset (1,242 training images, 352 validation images). The core contribution is a lightweight DCNv4-based deformable spatial adapter that bridges features from a frozen DINOv3-pretrained ConvNeXt backbone into an RTMDet detection head. Instead of using DCNv4 as a standard backbone operator, it is used as a spatial bridging module, learning dynamic sampling offsets to conform the rigid DINOv3 feature grid to the irregular, unstructured morphology of car dents. Implemented a custom grid_sample-based DCNv4 operator (avoiding the official CUDA-only build) to enable training on Kaggle dual T4 GPUs. The adapter layers are kept unfrozen during training while the backbone remains frozen, making the approach highly parameter-efficient. Qualitative evaluation shows DCNv4 adapters improve detection on specific dent geometries that standard conv adapters miss. Best checkpoint achieved at epoch 48 based on COCO bbox mAP. This work is being written as an academic paper targeting WACV 2027 / IEEE Transactions on Instrumentation and Measurement.",
        tags: ["PyTorch", "MMDetection", "RTMDet", "DCNv4 (custom)", "ConvNeXt", "DINOv3", "Kaggle (dual T4 GPU)", "COCO evaluation", "CarDD dataset"],
        badge: "Paper in Progress",
        highlights: ["CarDD Dataset", "WACV 2027 Target"],
        details: [],
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        dotColor: "#3b82f6",
    },
    {
        title: "Robust by Design: Benchmarking Hyperdimensional Computing Against Neural Baselines Under Hardware Faults",
        tagline: "HDC stays above 94% accuracy where FNNs and Transformers collapse to near-random at sub-0.1% bit-flip rates.",
        description: "Extending an accepted ICCD conference paper into a full journal submission, this work presents a rigorous robustness analysis of Hyperdimensional Computing (HDC) versus FNN and Transformer baselines under hardware-induced bit-flip faults. The key finding from the ICCD paper is that FNNs and Transformers collapse to near-random accuracy (~18.86%) at bit-flip rates below 0.001, while HDC maintains above 94% accuracy through 30% prototype bit-flips and degrades gracefully, only reaching 0% accuracy past 60% flip rate. For the journal extension, experiments are scaled across five datasets: Resonator networks, Feature extraction, Genome sequence matching, Seizure detection, and Sparse event classification. Additional analyses include: single-bit flip sensitivity (deterministic full sweep across all bit positions), layer-position analysis (early/middle/last layer corruption), and a reliability model with formal equations. Experiments are run via detached screen sessions on a remote H100 server with fixed-seed reruns for reproducibility.",
        tags: ["Python", "PyTorch", "H100 GPU (remote)", "Fault Injection", "Benchmark Datasets"],
        badge: "Journal Submission in Progress",
        highlights: ["HDC > 94% Acc", "Journal Extension"],
        details: [],
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
        dotColor: "#a855f7",
    },
    {
        title: "TPACT: Transformer Positional Encoding with Adaptive Coordinate Tokenization for 3D Point Clouds",
        tagline: "A geometry-aware positional encoding method that outperforms existing PE variants on real-world noisy point cloud data.",
        description: "Designed and benchmarked TPACT (Transformer-based Positional Encoding with Adaptive Coordinate Tokenization), a novel positional encoding strategy for transformer-based 3D point cloud classification. TPACT combines three components: CCG (Coordinate Confidence Gating), FM-RoPE (Frequency-Modulated Rotary Positional Embedding), and a 3-head attention layout. The method is evaluated against multiple existing PE variants on three benchmarks: a synthetic cube classification task, ScanObjectNN (real-world, noisy scans), and ModelNet40 (clean synthetic objects). Results show TPACT outperforms all PE variants on the primary cube task (97.97% vs next best 94.69%) and on ScanObjectNN (53.61% vs RoPE at 49.97%), demonstrating superior generalization to real-world geometric noise. On ModelNet40 (clean data, less geometric ambiguity), TPACT is competitive but trails slightly, which is honestly reported as a known limitation where CCG's statistics cannot distinguish missing points from noisy coordinates. Non-transformer baselines (PointNet++ and DGCNN) are included as landmarks, not competitive targets. The paper is being submitted to WACV and ACCV. Core claim: TPACT is the most effective PE strategy for transformer-based 3D processing, particularly on real-world, noisy point cloud data.",
        tags: ["PyTorch", "Transformer", "PointNet++", "DGCNN", "ModelNet40", "ScanObjectNN", "Kaggle GPU"],
        badge: "Paper in Progress",
        highlights: ["ScanObjectNN: 53.61%", "Cube Task: 97.97%"],
        details: [],
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
        dotColor: "#6366f1",
    },
    {
        title: "Retinal Micro-Lesion Detection via RETFound-DETR: Fine-Tuning a Foundation Model for Diabetic Retinopathy Screening",
        tagline: "Adapting a retinal foundation model (ViT-Large, pretrained on 1.6M fundus images) for bounding-box-level micro-lesion detection.",
        description: "Designed and implemented a RETFound-DETR pipeline for retinal micro-lesion detection, specifically targeting microaneurysms (MA), the earliest lesion in Diabetic Retinopathy. Built on RETFound, a ViT-Large masked autoencoder pretrained on 1.6M unlabelled fundus and OCT images using self-supervised learning (MAE), the pipeline adapts the frozen foundation backbone to a DETR-based detection head for bounding box prediction at 512×512 resolution. Worked with three datasets: MAPLES (built on MESSIDOR, adds segmentation and MA labels), IDRiD (54 train / 27 test images with segmentation), and a Shrouk MA patch dataset. Developed understanding of dataset hierarchy, MESSIDOR provides DR grading labels, MAPLES adds fine-grained segmentation. Started with a clean MA vs. Non-MA binary classification phase (patch-level) using RETFound features as the foundation, then progressed toward multi-class bounding-box detection. Debugged DETR training issues including matcher instability, foreground score thresholding, and slow F1 convergence in early epochs. Also studied the RETFound-DINOv2 variant (contrastive SSL pretraining vs. MAE) and its implications for foundation model design.",
        tags: ["PyTorch", "RETFound (ViT-L)", "DETR", "MAPLES/MESSIDOR", "IDRiD", "Kaggle T4 GPU", "MMDetection"],
        badge: "Research / Ongoing",
        highlights: ["1.6M Pretrained MAE", "ViT-Large Backbone"],
        details: [],
        gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
        dotColor: "#ec4899",
    },
    {
        title: "Comparative Study of Detection and Segmentation Architectures for Oral Cancer Lesion Analysis",
        tagline: "Evaluating Mask R-CNN, UNet++, and RTMDet for oral cancer detection and segmentation.",
        description: "Conducted a research-level comparative study of computer vision architectures for oral cancer detection and segmentation. Evaluated three families of models: (1) Mask R-CNN with a ConvNeXt backbone (instance segmentation approach), (2) UNet++ (semantic segmentation approach), and (3) RTMDet with a DINOv3-pretrained ConvNeXt backbone (object detection approach). Investigated the fundamental differences between detection-first and segmentation-first paradigms for medical lesion analysis, including tradeoffs in annotation cost, model complexity, and clinical utility. This work contributed to framing the correct task formulation for oral lesion analysis, specifically whether to localize first (detect bounding boxes) or directly segment lesion boundaries, with implications for downstream clinical deployment.",
        tags: ["PyTorch", "MMDetection", "Mask R-CNN", "ConvNeXt", "UNet++", "RTMDet", "DINOv3", "Medical Imaging"],
        badge: "Research / Ongoing",
        highlights: ["Comparative Study", "Oral Cancer Lesions"],
        details: [],
        gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
        dotColor: "#f59e0b",
    },
    {
        title: "SportsOpi Dataset & Stance Detection",
        tags: ["LLaMA-3.1", "DeepSeek-8b", "NLP", "Dataset"],
        badge: "Research Intern @ IISER Kolkata",
        details: [
            "Created 43K-comment dataset on sports controversies with multi-phase LLaMA-3.1 annotation",
            "Fine-tuned LLaMA-3.1-8b and DeepSeek-8b, boosting stance detection F1 from ~0.35 to ~0.75",
            "Achieved inter-annotator agreement κ > 0.8",
        ],
        highlights: ["43K Comments", "F1: ~0.75"],
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        dotColor: "#3b82f6",
    },
    {
        title: "EEG Signal Classification",
        tags: ["EEG", "MATLAB", "Python", "SVM"],
        badge: "Research Intern @ DIAT, DRDO",
        details: [
            "Novel classification method for upper limb movement tasks",
            "Achieved 97.50% micro-averaged accuracy and 99.17% mean accuracy",
            "Outperformed existing approaches by 10% using ensemble ML classifiers",
        ],
        highlights: ["97.50% Micro Avg", "99.17% Mean"],
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
        dotColor: "#a855f7",
    },
    {
        title: "AI-Powered Spirometer",
        tags: ["TensorFlow", "Flutter", "CNN+LSTM", "MobileNetV2", "Healthcare AI"],
        badge: "Final Year Project - ICASI 2025, Tokyo",
        details: [
            "Cost-effective portable spirometer for respiratory diagnostics",
            "Dual AI models: 1D CNN+LSTM (93.73% accuracy) + MobileNetV2 (92.7% accuracy)",
            "Flutter app with real-time FVC, FEV1, PEF measurement",
        ],
        highlights: ["93.73% Accuracy", "92.7% Accuracy"],
        link: "https://ieeexplore.ieee.org/abstract/document/11148564",
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
        dotColor: "#6366f1",
    },
    {
        title: "Brain Tumor Detection",
        tags: ["CNN", "ResNet-50", "MRI", "TensorFlow"],
        badge: "Project Intern @ IIT Bombay",
        details: [
            "CNN implementation with 95% testing accuracy on MRI images",
            "ResNet-50 fine-tuning achieving 99.50% training accuracy",
            "Comparative analysis of deep learning architectures",
        ],
        highlights: ["95% Test Acc.", "99.50% Train Acc."],
        gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
        dotColor: "#ec4899",
    },
    {
        title: "EMG-Based Robotics Claw (Prosthetics)",
        tags: ["EMG", "Robotics", "Biomedical", "Embedded"],
        badge: "🏆 2nd Rank in Department",
        details: [
            "EMG-controlled prosthetic claw secured 2nd rank in department in pre-final year B.E. project",
        ],
        highlights: ["2nd Rank"],
        gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
        dotColor: "#f59e0b",
    },
];

export default function Projects() {
    const [selected, setSelected] = useState<number | null>(null);
    const selectedProject = selected !== null ? projects[selected] : null;
    const portalRoot = typeof document !== "undefined" ? document.body : null;

    return (
        <section id="projects" className="relative py-28 bg-[#08000f]" style={{ minHeight: "100vh" }}>
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(99,102,241,0.06) 0%, transparent 65%)",
                }}
            />

            <div className="section-container relative">
                <SectionHeading title="Projects" subtitle="Research work and engineering projects that push boundaries" />

                {/* Card Grid - explicit 3-col */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            onClick={() => setSelected(i)}
                            style={{ cursor: "pointer" }}
                        >
                            <div
                                className="glass-card glass-card-hover"
                                style={{
                                    padding: "1.5rem",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                {/* Badge */}
                                {p.badge && (
                                    <span
                                        style={{
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            padding: "3px 10px",
                                            borderRadius: 9999,
                                            background: "rgba(99,102,241,0.15)",
                                            border: "1px solid rgba(99,102,241,0.25)",
                                            color: "#a5b4fc",
                                            display: "inline-block",
                                            width: "fit-content",
                                        }}
                                    >
                                        {p.badge}
                                    </span>
                                )}

                                {/* Title */}
                                <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                                    <h3
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "0.95rem",
                                            color: "white",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {p.title}
                                    </h3>
                                    {p.tagline && (
                                        <p
                                            style={{
                                                fontSize: "0.75rem",
                                                color: "#a5b4fc",
                                                lineHeight: 1.35,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {p.tagline}
                                        </p>
                                    )}
                                </div>

                                {/* Highlights */}
                                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                                    {p.highlights.map((h, j) => (
                                        <span
                                            key={j}
                                            style={{
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                padding: "3px 10px",
                                                borderRadius: 6,
                                                background: p.gradient,
                                                color: "white",
                                            }}
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                                    {p.tags.slice(0, 3).map((t, j) => (
                                        <span key={j} className="skill-badge" style={{ fontSize: "0.7rem", padding: "3px 10px" }}>
                                            {t}
                                        </span>
                                    ))}
                                    {p.tags.length > 3 && (
                                        <span className="skill-badge" style={{ fontSize: "0.7rem", padding: "3px 10px" }}>
                                            +{p.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal — responsive centered popup with stronger readability */}
            {portalRoot && createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                key="backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 z-[9998]"
                                style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
                                onClick={() => setSelected(null)}
                            />

                            {/* Responsive dialog */}
                            <motion.div
                                key="project-dialog"
                                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 28, scale: 0.96 }}
                                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                                onClick={(e) => e.stopPropagation()}
                                className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-[9999] p-3 md:p-6"
                            >
                                <div
                                    className="glass-card relative w-full overflow-hidden border border-indigo-500/25 shadow-2xl"
                                    style={{
                                        maxWidth: "min(92vw, 46rem)",
                                        maxHeight: "88svh",
                                    }}
                                >
                                    <div className="flex items-center justify-between gap-4 px-5 pt-4 md:px-8 md:pt-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-200 text-xs font-bold tracking-wider uppercase">
                                                Project
                                            </div>
                                            <div className="text-xs text-gray-400 tracking-[0.22em] uppercase">
                                                Detailed view
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelected(null)}
                                            className="p-2 rounded-lg bg-white/5 border-none cursor-pointer text-gray-400 hover:text-white transition-colors"
                                            aria-label="Close project details"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>

                                    <div
                                        className="overflow-y-auto px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6"
                                        style={{ maxHeight: "calc(88svh - 5rem)", wordBreak: "break-word", overflowWrap: "anywhere" }}
                                    >
                                        {selectedProject.badge && (
                                            <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300">
                                                {selectedProject.badge}
                                            </span>
                                        )}
                                        <h3 className="font-bold text-[1.35rem] md:text-2xl text-white mb-2 leading-tight break-words">
                                            {selectedProject.title}
                                        </h3>
                                        {selectedProject.tagline && (
                                            <p className="text-sm md:text-[0.98rem] text-indigo-300/90 mb-5 font-medium leading-relaxed max-w-[60ch]">
                                                {selectedProject.tagline}
                                            </p>
                                        )}
                                        <div className="flex gap-2 flex-wrap mb-5">
                                            {selectedProject.highlights.map((h, i) => (
                                                <span key={i} className="px-3 py-1 rounded-lg text-[0.72rem] font-bold text-white" style={{ background: selectedProject.gradient }}>{h}</span>
                                            ))}
                                        </div>
                                        {selectedProject.description ? (
                                            <p className="text-gray-300 text-sm md:text-[0.96rem] leading-7 md:leading-8 mb-6 max-w-[68ch]">
                                                {selectedProject.description}
                                            </p>
                                        ) : (
                                            <ul className="list-none pl-0 mb-5 space-y-3">
                                                {selectedProject.details?.map((detail, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <span style={{ color: selectedProject.dotColor }} className="flex-shrink-0 mt-0.5">•</span>
                                                        <span className="text-gray-300 text-sm md:text-[0.96rem] leading-7 md:leading-8">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <div className="flex gap-2 flex-wrap mb-7">
                                            {selectedProject.tags.map((t, i) => (
                                                <span key={i} className="skill-badge">{t}</span>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a href={selectedProject.link || "https://github.com/devadripta"} target="_blank" rel="noopener noreferrer"
                                                className="grow flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]">
                                                {selectedProject.link ? "View Paper" : "View Code"}
                                            </a>
                                            <a href="https://github.com/devadripta" target="_blank" rel="noopener noreferrer"
                                                className="flex items-center justify-center p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                portalRoot
            )}
        </section>
    );
}
