function counter(num = 0) {
    const accum = num;
    return {
        increase: () => accum + 1,
        decrease: () => accum - 1,
        value: () => accum,
    };
  }
  const res = counter(7);
  console.log(res.increase());
  console.log(res.decrease());
  console.log(res.value());