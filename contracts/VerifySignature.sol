// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract VerifySignature {
   
// A little more information, r and s are outputs of an ECDSA signature, and v is the recovery id.

    function verify(address _signer, bytes32 _ethSignedMessageHash, bytes32 r, bytes32 s, uint8 v)public pure returns (bool) {

      address expectedSigner = ecrecover(_ethSignedMessageHash, v, r, s);
    return expectedSigner == _signer;
 
    }


}
