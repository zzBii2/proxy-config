function FindProxyForURL(url, host) {
  // iOS-friendly configuration with fallbacks
  if (isPlainHostName(host) ||
      dnsDomainIs(host, ".local") ||
      isInNet(host, "10.0.0.0", "255.0.0.0") ||
      isInNet(host, "172.16.0.0", "255.240.0.0") ||
      isInNet(host, "192.168.0.0", "255.255.0.0") ||
      isInNet(host, "127.0.0.0", "255.0.0.0")) {
    return "DIRECT";
  }
  
  // Try SOCKS5 first, then the HTTP proxy through Privoxy, then direct
  return "SOCKS5 47.76.218.246:8388; PROXY 47.76.218.246:8118; DIRECT";
}
