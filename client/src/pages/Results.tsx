import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download } from "lucide-react";

export default function Results() {
  const [rollNumber, setRollNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [results, setResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Mock search - In production, this would call the API
    setTimeout(() => {
      setResults({
        student: {
          name: "Rajesh Kumar",
          rollNumber: rollNumber,
          course: "B.Tech Computer Science",
          semester: semester,
        },
        subjects: [
          { name: "Database Systems", marks: 85, maxMarks: 100, grade: "A" },
          { name: "Operating Systems", marks: 78, maxMarks: 100, grade: "B+" },
          { name: "Computer Networks", marks: 92, maxMarks: 100, grade: "A+" },
          { name: "Software Engineering", marks: 88, maxMarks: 100, grade: "A" },
          { name: "Web Technologies", marks: 81, maxMarks: 100, grade: "A-" },
        ],
        sgpa: 8.6,
        cgpa: 8.5,
      });
      setIsSearching(false);
    }, 1000);
  };

  const handleDownload = () => {
    console.log("Downloading results...");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Exam Results</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Check your examination results by entering your roll number and semester
            </p>
          </div>
        </div>

        <div className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <form onSubmit={handleSearch}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="rollNumber">Roll Number</Label>
                    <Input
                      id="rollNumber"
                      placeholder="Enter your roll number"
                      value={rollNumber}
                      onChange={(e) => setRollNumber(e.target.value)}
                      required
                      data-testid="input-roll-number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="semester">Semester</Label>
                    <Input
                      id="semester"
                      placeholder="Enter semester (e.g., 6)"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      required
                      data-testid="input-semester"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSearching} data-testid="button-search-results">
                  <Search className="h-4 w-4 mr-2" />
                  {isSearching ? "Searching..." : "Search Results"}
                </Button>
              </form>
            </Card>

            {results && (
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{results.student.name}</h2>
                    <p className="text-muted-foreground">
                      {results.student.rollNumber} • {results.student.course} • Semester {results.student.semester}
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleDownload} data-testid="button-download-results">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead className="text-center">Marks</TableHead>
                        <TableHead className="text-center">Max Marks</TableHead>
                        <TableHead className="text-center">Grade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {results.subjects.map((subject: any, index: number) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{subject.name}</TableCell>
                          <TableCell className="text-center">{subject.marks}</TableCell>
                          <TableCell className="text-center">{subject.maxMarks}</TableCell>
                          <TableCell className="text-center">
                            <span className="font-semibold">{subject.grade}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex gap-6 pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">SGPA</p>
                    <p className="text-2xl font-bold">{results.sgpa}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CGPA</p>
                    <p className="text-2xl font-bold">{results.cgpa}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
