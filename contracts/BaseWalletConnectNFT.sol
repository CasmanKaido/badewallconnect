// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BaseWalletConnectNFT
 * @dev Simple NFT contract for the Base WalletConnect App
 * This contract allows users to mint NFTs and demonstrates WalletConnect integration
 */
contract BaseWalletConnectNFT is ERC721, Ownable {
    uint256 private _nextTokenId;
    uint256 public maxSupply = 10000;
    uint256 public mintPrice = 0.001 ether;
    
    mapping(uint256 => string) private _tokenURIs;
    
    event NFTMinted(address indexed to, uint256 indexed tokenId);
    
    constructor() ERC721("BaseWalletConnect NFT", "BWCNFT") Ownable(msg.sender) {}
    
    /**
     * @dev Mint a new NFT
     * @param to Address to mint the NFT to
     * @param uri Metadata URI for the NFT
     */
    function mint(address to, string memory uri) public payable {
        require(_nextTokenId < maxSupply, "Max supply reached");
        require(msg.value >= mintPrice, "Insufficient payment");
        
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _tokenURIs[tokenId] = uri;
        
        emit NFTMinted(to, tokenId);
    }
    
    /**
     * @dev Get the token URI for a specific token
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        return _tokenURIs[tokenId];
    }
    
    /**
     * @dev Get total number of minted NFTs
     */
    function totalSupply() public view returns (uint256) {
        return _nextTokenId;
    }
    
    /**
     * @dev Update mint price (only owner)
     */
    function setMintPrice(uint256 newPrice) public onlyOwner {
        mintPrice = newPrice;
    }
    
    /**
     * @dev Update max supply (only owner)
     */
    function setMaxSupply(uint256 newMaxSupply) public onlyOwner {
        require(newMaxSupply >= _nextTokenId, "Cannot set max supply below current supply");
        maxSupply = newMaxSupply;
    }
    
    /**
     * @dev Withdraw contract balance (only owner)
     */
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        payable(owner()).transfer(balance);
    }
}
