const expect = require('chai').expect;
const faker = require('faker');
const Beta = require('../src/models/beta');

describe('Beta Model', () => {
  // Test for all Betas
  it('Gets All', (done) => {
    Beta.all(
      (err) => {
        throw new Error(err);
      },
      (betas) => {
        this.testBetas = betas;
        expect(this.testBetas.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a Beta
  it('Adds a new Beta', (done) => {
    // Generate a fake Beta with a random title
    const fakeBeta = { title: faker.name.firstName() };

    // Call beta model for adding
    Beta.add(fakeBeta,
      (err) => {
        throw new Error(err);
      },
      (beta) => {
        // Save the returned data for later use in tests
        this.tempBeta = beta.dataValues;

        // Beta.title returned from model should match beta.title supplied
        expect(beta.title).to.be.equal(fakeBeta.title);
        done();
      }
    );
  });

  // Find a Beta
  it('Find a Beta', (done) => {
    // Generate a fake Beta with a random title
    const targetBeta = this.testBetas[0];

    // Call beta model for finding
    Beta.one(targetBeta,
      (err) => {
        throw new Error(err);
      },
      (beta) => {
        // Beta.title returned from model should match beta.title supplied
        expect(beta.title).to.be.equal(targetBeta.title);
        done();
      }
    );
  });

  // Update a Beta
  it('Update a Beta', (done) => {
    // Load in the info for an existing beta
    const updateBeta = this.tempBeta;

    // Generate a new title for hte beta
    updateBeta.title = 'Not A Real Name';

    // Call beta model for updating
    Beta.update(updateBeta,
      (err) => {
        throw new Error(err);
      },
      (beta) => {
        // Save the returned data for later use in tests
        this.tempBeta = beta;
        // Beta.title returned from model should match beta.title supplied
        expect(beta.title).to.be.equal(updateBeta.title);
        done();
      }
    );
  });

  // Remove a Beta
  it('Remove a Beta', (done) => {
    // Load in the info for an existing beta
    const removeBeta = this.tempBeta;
    removeBeta.force = true;

    // Call beta model for updating
    Beta.remove(removeBeta,
      (err) => {
        throw new Error(err);
      },
      (response) => {
        // if successfully removed a 1 should be returned
        expect(response).to.be.equal(1);
        done();
      }
    );
  });
});
