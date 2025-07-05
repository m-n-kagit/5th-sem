//add binary numbers 
#include <iostream>
#include <bits/stdc++.h>
#include <algorithm>
using namespace std;

class Solution {
public:
    string addBinary(string a, string b) {
        int carry=0;
        int i=a.length()-1 , j=b.length()-1;
        string ans="";
        while(i>=0 || j>=0 ||carry) {
            int sum=carry;
            if(i>=0){
                sum+=a[i--]-'0';
            }
            if(j>=0){
                sum+=b[j--]-'0';
            }
            carry=sum/2;
            sum=sum%2;
            ans+=sum+'0';

        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
    
};



int main() {
    Solution  s1 ;
    // s1 = new Solution();
    string a= "11";
    string b="111";
    string ans;
    ans=s1.addBinary(a,b);
    cout << ans;
    return 0;
}