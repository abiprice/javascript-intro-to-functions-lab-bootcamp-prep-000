function shout(string) {
  return string.toUpperCase()
}

function whisper(HELLO) {
  return HELLO.toLowerCase()
}

expect(shout('hello')).toEqual('HELLO')
