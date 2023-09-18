interface IpData {
  is_valid: boolean;
  country: string;
  country_code: string;
  region_code: string;
  region: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  address: string;
}

export default IpData;
