// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SimpleStorage
 * @dev A simple contract to demonstrate WalletConnect integration
 * Store and retrieve values on the Base blockchain
 */
contract SimpleStorage {
    uint256 private storedValue;
    mapping(address => uint256) public userValues;
    
    event ValueChanged(address indexed user, uint256 newValue);
    
    /**
     * @dev Store a value
     * @param value The value to store
     */
    function store(uint256 value) public {
        storedValue = value;
        userValues[msg.sender] = value;
        emit ValueChanged(msg.sender, value);
    }
    
    /**
     * @dev Retrieve the stored value
     * @return The stored value
     */
    function retrieve() public view returns (uint256) {
        return storedValue;
    }
    
    /**
     * @dev Get a user's stored value
     * @param user The user address
     * @return The user's stored value
     */
    function getUserValue(address user) public view returns (uint256) {
        return userValues[user];
    }
}
