import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Textarea } from "@/Components/ui/textarea";

export default function ReverseTransaction() {
  const [journalEntry, setJournalEntry] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleAnalyze = () => {
    // Mock data for demonstration
    const mockResults = [
      {
        standard: "FAS 32",
        probability: 0.95,
        reason: "This transaction reflects an Ijarah Muntahia Bittamleek (lease-to-own) arrangement where the Right-of-Use asset and Deferred Ijarah Cost are recognized. FAS 32 governs Ijarah contracts including those ending in ownership transfer."
      },
      {
        standard: "FAS 002",
        probability: 0.05,
        reason: "If the transaction also includes presentation or disclosure elements, FAS 2 may be referenced as supporting guidance."
      }
    ];

    // Show results regardless of input content for demo purposes
    setResults(mockResults);
    setShowResults(true);
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">AAOIFI Reverse Transaction Analyzer</h1>
      
      <Card className="w-full">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Enter accounting journal entry ..."
              className="min-h-[100px]"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleAnalyze}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Analyze Entry
              </Button>
            </div>
          </div>

          {showResults && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="font-medium">Dr. Accounts Payable</div>
                <div className="text-right">1,000,000</div>
                <div className="font-medium">Cr. Work-in-Progress</div>
                <div className="text-right">1,000,000</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {showResults && (
        <div className="space-y-4">
          {results.map((result, index) => (
            <Card key={index} className="w-full">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Standard: {result.standard}</h3>
                  <span className="text-sm text-gray-500">Probability: {result.probability}</span>
                </div>
                <p className="text-gray-700">
                  Reason: {result.reason}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}