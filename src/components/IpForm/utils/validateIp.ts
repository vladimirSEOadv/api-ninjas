export const ipIsValid = (ip: string): boolean => {
  const ipv4Pattern =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Pattern.test(ip);
};

// Это регулярное выражение проверяет каждый октет на наличие допустимых значений от 0 до 255.
// ^: Начало строки.
// (?: ...): Негруппирующая (не сохраняющаяся) группа.
// (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?): Это один октет, который может быть от 0 до 255.
// (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.: Этот шаблон используется трижды для проверки первых трех октетов, каждый с точкой после него.
// (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$: Последний октет и символ конца строки $.
