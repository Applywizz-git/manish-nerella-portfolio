import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { ProjectCard } from '../ProjectCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../ui/carousel';

export const Projects = () => {
  const projects = [
    {
      title: "Deepfake Video Detection",
      description:
        "Developed a deep learning pipeline for detecting deepfake video content. Combined EfficientNet-B3 for spatial feature extraction with LSTM for temporal sequence modeling. Implemented using TensorFlow and OpenCV for large-scale video preprocessing and training. Integrated MLflow for experiment tracking, reproducibility, and performance benchmarking. Achieved 91.3% accuracy, significantly outperforming ResNet50 baselines. Optimized the model for both accuracy and inference efficiency on real-world datasets. Addressed challenges of video manipulation detection through robust architecture design. Delivered a scalable solution demonstrating state-of-the-art results in deepfake detection.",
      technologies: ["Python", "TensorFlow", "OpenCV", "MLflow", "EfficientNet", "LSTM"],
      metrics: "🎯 91.3% accuracy outperforming ResNet50 baselines",
    },
    {
      title: "Data-Driven Web Game with CI/CD",
      description:
        "Engineered a data-driven web game platform powered by AWS cloud services. Leveraged AWS S3 for data storage and Lambda for event-driven processing. Implemented CI/CD pipelines using CodePipeline and CodeBuild for automated deployments. Enabled real-time analytics pipelines to monitor gameplay and user engagement. Optimized query response times, achieving a 25% reduction in latency. Applied Infrastructure as Code (IaC) for reproducibility and scalable cloud provisioning. Designed system architecture for high availability and fault tolerance. Delivered a seamless integration of data, automation, and cloud workflows.",
      technologies: ["AWS S3", "Lambda", "CodePipeline", "CodeBuild", "Python", "IaC"],
      metrics: "⚡ 25% reduction in query latency with automated workflows",
    },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Manage pause/resume ourselves
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
      autoplay.current?.reset();
    };
    const onReInit = () => autoplay.current?.reset();
    const onPointerUp = () => autoplay.current?.play();

    api.on('select', onSelect);
    api.on('reInit', onReInit);
    api.on('pointerUp', onPointerUp);
    onSelect();

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onReInit);
      api.off('pointerUp', onPointerUp);
    };
  }, [api]);

  const slideShellClasses = (i: number) => {
    if (!api) return "transition-all duration-500";
    const snaps = api.scrollSnapList().length;
    const diffRaw = Math.abs(i - selectedIndex);
    const diff = Math.min(diffRaw, snaps - diffRaw);
    if (diff === 0) return "scale-100 opacity-100 drop-shadow-xl transition-all duration-500";
    if (diff === 1) return "scale-95 opacity-90 transition-all duration-500";
    return "scale-90 opacity-70 transition-all duration-500";
  };

  return (
    <section id="projects" className="py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate expertise in machine learning,
            cloud architecture, and scalable data systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            className="w-full"
            opts={{ align: 'center', loop: true, slidesToScroll: 1 }}
            setApi={setApi}
            plugins={[autoplay.current]}
            onMouseEnter={() => autoplay.current?.stop()}
            onMouseLeave={() => autoplay.current?.play()}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-full">
                  {/* One-card view, centered; let height be auto so text isn't cut */}
                  <div className={`will-change-transform ${slideShellClasses(index)} mx-auto w-full max-w-[680px] h-auto flex`}>
                    <ProjectCard {...project} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows removed */}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
