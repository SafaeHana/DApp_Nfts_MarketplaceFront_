import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
import { Web3Service } from '@angular/web3';
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from '../../config';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  // Declare variables to store NFT data
  id!: number;
  name!: string;
  image!: string;

  // Inject the Web3Service
  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
    // Initialize the component by fetching data for the NFT
    this.fetchNFTData();
  }

  async fetchNFTData() {
    // Get the current provider and create a new Web3 instance
    const provider = this.web3Service.currentProvider;
    const web3 = Web3.web3(provider);
    // Create a new contract instance
    const contract = new web3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS);

    // Call the contract's "getNFT" method to fetch the data for the NFT
    const data = await contract.methods.getNFT(this.id).call();

    // Update the component variables with the NFT data
    this.name = data.name;
    this.image = data.image;
  }

}
