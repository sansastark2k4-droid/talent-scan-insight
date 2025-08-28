import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

export const UploadSection = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setUploadedFiles(files);
      toast.success(`${files.length} file(s) selected for processing!`);
      handleUpload(files);
    }
  };

  const handleUpload = (files: File[] = uploadedFiles) => {
    if (files.length === 0) {
      toast.error("Please select files first!");
      return;
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    toast.info(`Processing ${files.length} resume files...`);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsComplete(true);
          toast.success(`Successfully processed ${files.length} resumes!`);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleViewResults = () => {
    const element = document.getElementById('candidates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toast.info("Check out your candidate results below!");
  };

  const resetUpload = () => {
    setIsComplete(false);
    setUploadProgress(0);
    setUploadedFiles([]);
    toast.info("Ready for new uploads!");
  };

  return (
    <section id="upload" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Start Screening Resumes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload resumes in bulk and let our AI analyze them instantly. Supports PDF, DOCX, and more.
          </p>
        </div>

        <Card className="p-8 shadow-elevated border-border/50 mb-8">
          <div className="text-center">
            {!isComplete ? (
              <>
                <div className="mb-8">
                  <div className="p-4 rounded-full gradient-primary shadow-glow inline-flex mb-4">
                    <Upload className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Upload Resume Files</h3>
                  <p className="text-muted-foreground">
                    Drag and drop files here, or click to browse
                  </p>
                </div>

                {isUploading ? (
                  <div className="space-y-4">
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Processing resumes... {uploadProgress}%
                    </p>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-lg p-12 hover:border-primary/50 transition-smooth cursor-pointer">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Drop your resume files here or click to select
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload-input"
                    />
                    <Button 
                      onClick={() => document.getElementById('file-upload-input')?.click()}
                      className="gradient-primary text-primary-foreground shadow-glow"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Choose Files
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center">
                <div className="p-4 rounded-full bg-success/10 inline-flex mb-4">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-success">Upload Complete!</h3>
                <p className="text-muted-foreground mb-6">
                  Successfully processed {uploadedFiles.length} resumes. View results below.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleViewResults} className="gradient-primary text-primary-foreground shadow-glow">
                    <Zap className="mr-2 h-4 w-4" />
                    View Results
                  </Button>
                  <Button variant="outline" onClick={resetUpload}>
                    Upload More
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Upload Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center shadow-card border-border/50">
            <div className="p-3 rounded-full bg-primary/10 inline-flex mb-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">2.3s</div>
            <div className="text-sm text-muted-foreground">Avg Processing Time</div>
          </Card>

          <Card className="p-6 text-center shadow-card border-border/50">
            <div className="p-3 rounded-full bg-success/10 inline-flex mb-3">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div className="text-2xl font-bold mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Parsing Accuracy</div>
          </Card>

          <Card className="p-6 text-center shadow-card border-border/50">
            <div className="p-3 rounded-full bg-accent/10 inline-flex mb-3">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Supported Formats</div>
          </Card>
        </div>
      </div>
    </section>
  );
};