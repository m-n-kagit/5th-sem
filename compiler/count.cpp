#include <iostream>
#include <fstream>
#include <string>
#include <unordered_set>
using namespace std;

// Keywords in C++
unordered_set<string> keywords = {
    "if", "else", "return", "cout", "cin", "int", "float", "double", "char", "for", "while", "do", "switch", "case", "break", "continue"
};

// Separators
unordered_set<char> sepr = {
    '+', '-', ';', '*', '/', '!', '=', '{', '}', '(', ')', '>', '<', ' ', '\n', '\t'
};

// Operators
unordered_set<char> opr = {
    '+', '-', '*', '/', '=', '>', '<'
};

bool check_keyword(string s) {
    return keywords.find(s) != keywords.end();
}

int count_keywords(const string &s) {
    int count = 0;
    string temp_s = "";

    for (char c : s) {
        if (sepr.find(c) != sepr.end()) {
            if (!temp_s.empty() && check_keyword(temp_s)) {
                count++;
            }
            temp_s = "";
        } else {
            temp_s += c;
        }
    }

    // Check last word
    if (!temp_s.empty() && check_keyword(temp_s)) {
        count++;
    }

    return count;
}

int count_operators(const string &s) {
    int count = 0;
    for (char c : s) {
        if (opr.find(c) != opr.end()) {
            count++;
        }
    }
    return count;
}

int main() {
    string filename;
    cout << "Enter filename: ";
    cin >> filename;

    ifstream file(filename);
    if(!file) {
        cerr << "Error: Could not open file " << filename << endl;
        return 1;
    }

    string content((istreambuf_iterator<char>(file)), istreambuf_iterator<char>()); // string(begin(),end());

    int keyword_count = count_keywords(content);
    int operator_count = count_operators(content);

    cout << "Number of keywords: " << keyword_count << endl;
    cout << "Number of operators: " << operator_count << endl;

    return 0;
}
