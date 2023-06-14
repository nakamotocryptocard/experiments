// Author : Nakamoto Crypto Cards
// Define the NCCLibrary object
var NCCLibrary = (function() {
    var layers = [["c3cf9a908ca43701050591474e956958e399366fa9387f0af39e77b58741cbf0i0", "79949d1c9a16bbdcc8eb54aac302c469b0412cf63303ee25b61bb7f985dd1a32i0", "9637a04c84a70568036a4e83c6e8f9d4c8a8322471a1a566966750d1f24c68ebi0", "6a1d2c0ec830d87bca302a978707b861a3e248d919de87fad590609d9607413ai0", "d6e65e0b0aa081f8a5694a65c6af330da2c2100a3352bf1908364c37f86bba27i0"], ["7b3a228c9e1dc676ad4d68ccfddc66c76c1cc71cfa802290eaaf627ea76bbf62i0", "1ac45b6162d9ecfa29aafbee0b732bfd4250ae3d221b0d1046d8c32da3da778di0", "878732c59a744d3b78f4db16a0abcd9aee324d6c4227271e76f02f751ff5dbdfi0", "0eb18bd422810d82710b17a39649c91234140d700950cf3c2b06dda313dcd61fi0", "4147c50ab453af65cc69e04ca4891ee4eab7d842bf583be90dd2fa01925b79bfi0"], ["3349997fc6c74d2106ffd1df31ec174e519b654f03fbf6fbd50e617b4ea597aai0", "e9b45fd0c43f814b43f520d5a4ab279ccce046a4442b4526229c4387588e6629i0", "cd02c206d05efab8af9d3338cd512b4f9d01c80c9752d0dc888bff5f12c4d5b4i0", "0aaba1e7d37927dca52e2d98b161fba8ce0eb0ccf9bc11e2ae4ba4f30531cceei0", "c6497be2e68072a6b2ae26ba3715f87e124b3f43149e353ef458a990a01a03f0i0"], ["5818106ab692370e72e15029a925099adcb0072ac7792261adae3b4297a465bbi0", "515ff1db2fbb9d77f32a7b87b6dbdfa7abacd8c7aaa5bd2fdb572bdf3f197f2ei0", "85e5916c06ad324e94aa731fe0ff3b5b696a79ece3920c8d99d12550368d49f0i0", "a66640e8be640150e5aaf05833e44c076d1a14e94c0ff06fedbf0731caffb41fi0", "652ba50fe14ad47b1cc351f4f81234b81dbb32be5f2c66f706990755331ffbf5i0", "08f5503e368577ec5b391d75116a8174c974d763efc3dca816fea13d3f3615dci0"], ["26c82269f3d81c51311c43d93344428d74a5acd47b11dc2b69cbb04651eee81fi0", "e3de6bf8c8a53d9e022f4e68635848cb58799c2802ccfe5a811d0b36c0b46fdfi0", "e837ec89777731b396538af7ed110d3cb53585494597b780b387e28f97d89913i0", "5c73bec378c7452bb2f37b9b8453f650fcaf019ba1cffcf6102820087d774bb3i0", "1272c34cd55d448df46574b0bc3f8d0ff526b84dff69d26337bd0875b7996ef0i0"]];

    function mergeImages() {
        var mergedItems = [];
        for (var i = 0; i < layers.length; i++) {
            var randomIndex = Math.floor(Math.random() * layers[i].length);
            var randomItem = layers[i][randomIndex];
            mergedItems.push(randomItem);
        }
        return mergedItems;
    }

    // Expose the mergeImages function to the library users
    return {
        mergeImages: mergeImages
    };
})();
