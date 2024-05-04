searchState.loadedDescShard("base64", 0, "Getting started\nErrors that can occur while decoding.\nA DecodeError occurred\nErrors that can occur while decoding into a slice.\nErrors that can occur while encoding into a slice.\nAn invalid byte was found in the input. The offset and …\nThe last non-padding input symbol’s encoded 6 bits have …\nThe length of the input is invalid. A typical cause of …\nThe nature of the padding was not as configured: absent or …\nThe provided slice is too small.\nThe provided slice <em>may</em> be too small.\nProvides Alphabet and constants for alphabets commonly …\nDecode base64 using the <code>STANDARD</code> engine.\nDecode from string reference as octets using the specified …\nDecode the input into the provided output slice.\nDecode from string reference as octets.\nReturns a conservative estimate of the decoded size of …\nEnables base64’d output anywhere you might use a <code>Display</code> …\nEncode arbitrary octets as base64 using the <code>STANDARD</code> engine…\nEncode arbitrary octets as base64 using the provided <code>Engine</code>…\nEncode arbitrary octets as base64 into a supplied slice.\nEncode arbitrary octets as base64 into a supplied <code>String</code>.\nCalculate the base64 encoded length for a given input …\nProvides the Engine abstraction and out of the box …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPreconfigured engines for common use cases.\nImplementations of <code>io::Read</code> to transparently decode base64.\nImplementations of <code>io::Write</code> to transparently handle …\nAn alphabet defines the 64 ASCII characters (symbols) used …\nThe bcrypt alphabet.\nThe alphabet used in BinHex 4.0 files.\nThe <code>crypt(3)</code> alphabet (uses <code>.</code> and <code>/</code> as the first two …\nAll bytes must be unique\nThe alphabet used in IMAP-modified UTF-7 (uses <code>+</code> and <code>,</code>).\nAlphabets must be 64 ASCII bytes\nPossible errors when constructing an Alphabet from a <code>str</code>.\n<code>=</code> cannot be used\nThe standard alphabet (uses <code>+</code> and <code>/</code>).\nThe URL safe alphabet (uses <code>-</code> and <code>_</code>).\nAll bytes must be printable (in the range <code>[32, 126]</code>).\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate an <code>Alphabet</code> from a string of 64 unique printable …\nA convenience wrapper for base64’ing bytes into a format …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate a <code>Base64Display</code> with the provided engine.\nThe minimal level of configuration that engines must …\nThe config type used by this engine\nThe decode estimate used by an engine implementation. …\nThe decode estimate used by this engine\nMetadata about the result of a decode operation\nControls how pad bytes are handled when decoding.\nAn <code>Engine</code> provides low-level encoding and decoding …\nCanonical padding is allowed, but any fewer padding bytes …\nPadding must be canonical (0, 1, or 2 <code>=</code> as needed to …\nPadding must be absent – for when you want predictable …\nReturns the config for this engine.\nDecode the input into a new <code>Vec</code>.\nDecode the input into the provided output slice.\nDecode the input into the provided output slice.\nDecode the <code>input</code> into the supplied <code>buffer</code>.\nReturns a conservative (err on the side of too big) …\nEncode arbitrary octets as base64 using the provided <code>Engine</code>…\nReturns <code>true</code> if padding should be added after the encoded …\nEncode arbitrary octets as base64 into a supplied slice. …\nEncode arbitrary octets as base64 into a supplied <code>String</code>. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nProvides the GeneralPurpose engine and associated config …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA general-purpose base64 engine.\nContains configuration parameters for base64 encoding and …\nDon’t add padding when encoding, and require no padding …\nInclude padding bytes when encoding, and require that they …\nA GeneralPurpose engine using the alphabet::STANDARD …\nA GeneralPurpose engine using the alphabet::STANDARD …\nA GeneralPurpose engine using the alphabet::URL_SAFE …\nA GeneralPurpose engine using the alphabet::URL_SAFE …\nDelegates to GeneralPurposeConfig::new.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a <code>GeneralPurpose</code> engine from an Alphabet.\nCreate a new config with <code>padding</code> = <code>true</code>, …\nCreate a new config based on <code>self</code> with an updated …\nCreate a new config based on <code>self</code> with an updated …\nCreate a new config based on <code>self</code> with an updated <code>padding</code> …\nA <code>Read</code> implementation that decodes base64 data read from …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nUnwraps this <code>DecoderReader</code>, returning the base reader …\nCreate a new decoder that will read from the provided …\nDecode input from the wrapped reader.\nA <code>Write</code> implementation that base64-encodes data using the …\nA <code>Write</code> implementation that base64 encodes data before …\nAn abstraction around consuming <code>str</code>s produced by base64 …\nConsume the base64 encoded data in <code>buf</code>\nEncode all remaining buffered data and write it, including …\nBecause this is usually treated as OK to call multiple …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a EncoderStringWriter that will append to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps this <code>EncoderWriter</code>, returning the base writer it …\nEncode all remaining buffered data, including any trailing …\nCreate a new encoder that will write to the provided …\nCreate a EncoderStringWriter that will encode into a new …\nEncode input and then write to the delegate writer.")