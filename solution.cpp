#include <iostream>
#include <fstream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<string> processString(const string& input) {
        vector<string> chunks;
        string cleanedString;

        // Removing new lines
        for (char c : input) {
            if (c != '\n') {
                cleanedString += c;
            }
        }

        // Splitting into 2000 character chunks
        const int chunkSize = 2000;
        size_t start = 0;
        while (start < cleanedString.size()) {
            size_t end = start + chunkSize;
            if (end >= cleanedString.size()) {
                chunks.push_back(cleanedString.substr(start));
            } else {
                while (end > start && cleanedString[end - 1] != '.') {
                    --end;
                }
                chunks.push_back(cleanedString.substr(start, end - start));
                start = end;
            }
        }

        return chunks;
    }
};

int main() {
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    ifstream file("input.txt");
    string inputData, line;

    // Read the entire file
    while (getline(file, line)) {
        inputData += line + "\n";
    }

    vector<string> processedData = obj.processString(inputData);

    // Printing chunks
    for (const string& chunk : processedData) {
        cout << chunk << endl;
    }

    return 0;
}
