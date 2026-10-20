# Security Identity and Privacy

Interpret security identity and privacy claims through actors resources protected properties and evidence. Build on network API data release and testing vocabulary; no exploit execution or specialist legal assessment is assumed. Concrete constructed artifacts keep possible harm separate from observed events and implementation guarantees.

This domain is in progress: 7 of 15 approved lessons are available.

## 1. Assets and threats

### [1.1. Confidentiality integrity availability assets threats and risk](<sections/1. Assets and threats/1.1. Confidentiality integrity availability assets threats and risk.md>)

1. **Name the asset and the security property that matters:** Distinguish confidentiality integrity and availability for public and restricted information without equating them with one mechanism or every security concern.
2. **Separate a possible harmful event from its risk assessment:** Identify threat sources events likelihood impact and assessment assumptions and interpret threat modeling as a bounded reasoning activity.
3. **Read a security claim through a concrete harm scenario:** Assess a fictional TLS and public-export proposal,retain missing evidence and revise only the affected conclusion when the exported contents change.

### [1.2. Vulnerabilities exploits attacks incidents and attack surface](<sections/1. Assets and threats/1.2. Vulnerabilities exploits attacks incidents and attack surface.md>)

1. **Distinguish the weakness from its use and observed consequences:** Interpret vulnerabilities exploits exploitability attacks events alerts and scoped incident classifications without inventing a production compromise.
2. **Map exposure without treating every interface as a vulnerability:** Identify an attack surface vector and trust boundary and compare changed paths with changed sensitivity or authority.
3. **Read a finding and an event history at their actual evidence levels:** Assess an original scanner staging and production packet and revise a disclosure conclusion only when permission and response evidence supports it.

## 2. Identity and access

### [2.1. Identification authentication authorization and accounting](<sections/2. Identity and access/2.1. Identification authentication authorization and accounting.md>)

1. **Separate identifying a subject from verifying identity evidence:** Distinguish claimed account names authentication identity proofing and the security meaning of AAA without treating sign-in as proof of every real-world attribute.
2. **Distinguish an access decision from its activity record:** Explain resource-specific authorization public access accounting and audit evidence without equating a decision record with a completed operation.
3. **Trace independent identity permission and outcome observations:** Interpret four constructed requests and revise only the relevant authorization or completion claim when policy or evidence changes.

### [2.2. Principals credentials sessions tokens roles and permissions](<sections/2. Identity and access/2.2. Principals credentials sessions tokens roles and permissions.md>)

1. **Identify the principal and the authority relevant to this request:** Distinguish human service and device principals,credential material,roles and resource-specific permissions without assuming a universal admin role.
2. **Separate session continuity from token representation and validity:** Interpret access and bearer tokens,JWT claims,recipient scope,expiry and revocation without equating decoded contents or logout with every authority boundary.
3. **Trace a human session and a worker request separately:** Read a fictional identity and lifetime packet and revise a specific permission or revocation conclusion only when its policy and enforcement evidence changes.

## 3. Identity protocols and factors

### [3.1. OAuth OIDC SAML SSO and federation](<sections/3. Identity protocols and factors/3.1. OAuth OIDC SAML SSO and federation.md>)

1. **Distinguish delegated access from an authentication layer:** Map OAuth resource roles,OIDC identity roles and code/access/ID token purposes with current OAuth security context.
2. **Separate federation protocols from the single-sign-on experience:** Interpret IdP RP SP,SAML assertions and trust while keeping federation configuration distinct from observed sign-in continuity.
3. **Read a two-application sign-in and delegated-API story:** Trace purpose and recipient for different artifacts,local permission and independent sessions and revise a claim when SSO or logout evidence changes.

### [3.2. Passwords MFA passkeys API keys and service identities](<sections/3. Identity protocols and factors/3.2. Passwords MFA passkeys API keys and service identities.md>)

1. **Count distinct factors rather than fields or gestures:** Interpret passwords passphrases MFA 2FA and OTP with scoped phishing-resistance evidence instead of prompt counts.
2. **Interpret a passkey through its cryptographic and local checks:** Distinguish public-key credential control,user presence,user verification and synced versus device-bound arrangements with current WebAuthn context.
3. **Distinguish human authentication from API and workload identity:** Read provider-specific API-key meanings and service-account credentials separately from permissions and compare five bounded authentication arrangements.

## 4. Cryptographic vocabulary

### [4.1. Encoding hashing encryption and digital signatures](<sections/4. Cryptographic vocabulary/4.1. Encoding hashing encryption and digital signatures.md>)

1. **Separate representation and byte comparison from confidentiality:** Distinguish Base64 and cryptographic hashing from hiding information,including digest display collision and guessing limits.
2. **Identify what a key adds to protection and verification:** Compare encryption authenticated encryption HMAC and digital signatures through their goals key relationships and trust assumptions.
3. **Observe encoding a value and checking a changed message:** Run a complete local Base64 digest and MAC experiment and explain why replaceable hashes or disclosed keys cannot authenticate an origin.

[← Back to IT Vocabulary](<../README.md>)
