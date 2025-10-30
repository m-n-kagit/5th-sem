#include <iostream>
#include <bits/stdc++.h>
#include <vector>
using namespace std;



int main() {
    int arr[] = {1,2,3};
    vector <int> v(arr,arr+3);
    for(int i=0;i<v.size();i++){
        cout<<v[i];
    }
    return 0;
}