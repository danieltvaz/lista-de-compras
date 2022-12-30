export function saveData(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getData<T = any>(key: string): T | null {
  const data = localStorage.getItem(key);

  if (data) {
    const parsedData = JSON.parse(data);
    return parsedData;
  }
  return null;
}

export function deleteData<T>(key: string) {
  localStorage.removeItem(key);
}
