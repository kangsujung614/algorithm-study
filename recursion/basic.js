// n부터 1까지 콘솔에 출력(재귀)
function print(n){
    if( n < 1 ){
      return;
    }
    console.log(n);
    print(n-1);
}
  
print(10);
  
// n부터 1까지 더한 결과를 콘솔에 출력(재귀)
function sum(n){
    if(n < 1){
      return 0;
    }
    return( n + sum(n-1) );
}

console.log(sum(10));
  
// 펙토리얼 구현(재귀)
function factorial(n) {
    if(n < 1){
      return 1;
    }
    return ( n * factorial(n-1));
}

console.log(factorial(5));