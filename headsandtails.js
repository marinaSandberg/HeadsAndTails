function solution(A) {
    let tails = 0;
    let heads = 0;

    for (i = 0; i < A.length; i++) {
        if (A[i] === 1) {
            tails++;
        }
        else {
            heads++;
        }
    }

    return Math.min(tails);
}