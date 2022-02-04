// 비밀지도

const solution = (n, arr1, arr2) => {
  let answer = Array.from(Array(n), () => new Array(n).fill(" "));

  const chainge = (arr) => {
    arr.forEach((el, y) => {
      let map = el.toString(2);
      if (map.length < n) {
        map = "0".repeat(n - map.length) + map;
      }
      map.split("").forEach((num, x) => {
        if (num == 1) answer[y][x] = "#";
      });
    });
  };
  chainge(arr1);
  chainge(arr2);
  return answer.map((el) => {
    return el.join("");
  });
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
