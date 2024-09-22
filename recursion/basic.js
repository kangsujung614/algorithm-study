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

// 프로그래머스 코딩테스트 연습 > 타겟 넘버 > DFS, 재귀
// 다른 사람의 풀이한 정답 코드 분석
function solution(numbers, target) {
    let answer = 0;

    const dfs = (idx, result) =>{
        console.log(idx, result);
        if(idx === numbers.length && result === target){
            answer += 1;
            console.log("통과");
            return; // 함수의 실행을 중단하고 반환함으로써 재귀 호출 중단
        }
        else if(idx === numbers.length && result !== target){
            console.log("탈락");
            return; // 함수의 실행을 중단하고 반환함으로써 재귀 호출 중단
        }
        // 완전 이진 트리로 접근하여 이해(binaryTree.png)
        dfs(idx + 1, result - numbers[idx]); // 재귀
        dfs(idx + 1, result + numbers[idx]); // 재귀
    }

    dfs(0, 0);

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));