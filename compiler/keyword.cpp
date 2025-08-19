#include <iostream>
#include <bits/stdc++.h>
using namespace std;
// to check whether the given string is keyword or not .
unordered_set<string> keywords ={"if","else","return","cout","cin","int","float","return","elseif"};
unordered_set<char> sepr ={'+','-',';','*','/','!','=','{','}','(',')','>','<',' '};
unordered_set<string> opr ={"+","-","*","/","=",">","<","<=",">="};


bool check_keyword(string s){
    return  keywords.find(s)!=keywords.end();
}

// int count_keyword(string s){
//     int count=0;
//     string temp_s="";
//     for(char c : s){
//         if(sepr.find(c)!=sepr.end()){
//             temp_s ="";
//         }
//         else{  
//             temp_s+=c;
//         }
//         if(keywords.find(temp_s)!=keywords.end()){
//             count++;
//         }
//         cout<<temp_s<<endl;
        
//     }
//     return count;
// }

int count_keyword(const string &s) {
    int count = 0;
    string temp_s = "";
    for (char c : s) {
        if (sepr.find(c) != sepr.end()) {
            // First, check if the current word is a keyword
            if (!temp_s.empty() && keywords.find(temp_s) != keywords.end()) {
                count++;
            }
            temp_s = ""; // Then clear
        }
        else {  
            temp_s += c;
        }
        cout<<temp_s<<endl;
    }

    // Final check for the last word (if string doesn't end with a separator)
    if (!temp_s.empty() && keywords.find(temp_s) != keywords.end()) {
        count++;
    }

    return count;
}

int count_operator(string s ){
    int count=0;
    string temp_s="";
    for (char c : s) {
        if (opr.find(temp_s) != opr.end()) {
            count++;
            temp_s = ""; // Then clear
        }
        else {  
            temp_s += c;
        }
        cout<<temp_s<<endl;
    }
    return count;
}


int main() {
    string s;
    cout<<"Enter the string:"; // cin will not get the string affter space charcater 
    getline(cin,s);
    // bool r = check_keyword(s);
    // cout<<r;
    
    int count_key = count_keyword(s);
    cout<<count_key;
    return 0;
}