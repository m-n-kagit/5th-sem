#include <iostream>
#include <bits/stdc++.h>
#include <fstream>
using namespace std;

int count_occurence(string s,char c){
    unordered_map<char,int> count;
    for(char c : s){
        count[c]++;
    }
    return count[c];
}

int main() {
    string  filename;
    cout<<"Enter the file name here: "<<endl;
    cin>>filename;
    ifstream file(filename);
    string content((istreambuf_iterator<char>(file)),istreambuf_iterator<char>());
    int count_char= count_occurence(content,';');
    cout <<count_char<<endl;
    return 0;
}